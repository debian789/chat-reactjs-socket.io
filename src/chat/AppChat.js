import React, {Component} from 'react';
import ListChat from './ListChat';
import InputMensaje from './InputMensaje';
import uid from 'uid';
import io from 'socket.io-client';
import {Link} from 'react-router-dom'

export default class AppChat extends Component{
	//inicializaciñon de state y contextos 
	constructor(props){
		super(props);
		this.state = {mensajes:[],user:''}
		this.sendMensaje =this.sendMensaje.bind(this);
	}

	// Esta pendiente de recibir informacion desde el server, cuando obtenga la infomacion 
	// crea un nuevo mensaje 
	componentWillMount(){
		// Url de escucha de socket.io, el cliente con  el server
		//this.socket = io('https://chat-reactjs.herokuapp.com');
		this.socket = io('http://localhost:3001');

		//Esta pendiente de recibir informacion desde el server
		this.socket.on('mensaje',(mgs) => {
			if(mgs.user !== this.state.user){
				this.newMensaje(mgs)
			}
		})

		//Obtiene los parametros que se pasaron por url 
		//debugger
		let userUrl = this.props.match.params.user;
		this.setState({user:userUrl});
	}

	// Esta función se encarga de armar el objeto mensaje con (nombre, mensaje y id) y envia 
        // un envento con el mensaje al server de que el cliente creo el mensaje 
        // y asi los demas usuarios del chat reciben la informacion eso lo hace con this.socket.emit()
	sendMensaje(mensaje){
		let mensajeEnviar = {mensaje:mensaje.mensaje,user:this.state.user,key:uid()}
		let mensajeInsertar = {mensaje:mensaje.mensaje,user:this.state.user,key:uid(),estilo:'itemListChat'}
		this.newMensaje(mensajeInsertar);
		
		//Envia un mensaje al server, este se encarga de reenviarlo a todos
		this.socket.emit('mensaje',mensajeEnviar)
	}

	//Funcion para la creacion del mensaje se encarga de llenar el arreglo con los mensajes que lleguen y se envien 
	newMensaje(mensaje){
			this.state.mensajes.push(mensaje);
			let mensajes = this.state.mensajes;
			this.setState({mensajes:mensajes})
	}

	render(){
		return <div>
			<Link to="/" className="salir">Salir</Link>
			<div className="cuadroChat">
				<ListChat conten={this.state.mensajes}/>
				<InputMensaje  onSendMensaje={this.sendMensaje}/>
			</div>
		</div>
	}
}
