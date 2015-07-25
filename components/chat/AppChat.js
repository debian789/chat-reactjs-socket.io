import React from 'react';
import ListChat from './ListChat';
import InputMensaje from './InputMensaje';
import uid from 'uid';
import io from 'socket.io-client';


export default class AppChat extends React.Component{

	constructor(props){
		super(props);
		this.state = {mensajes:[],user:''}
		this.sendMensaje =this.sendMensaje.bind(this);
		//this.user = uid(10);
		//this.user = '';
	}


	componentWillMount(){
		this.socket = io('http://localhost:3000');
		this.socket.on('mensaje',(mgs) => {
			if(mgs.user != this.state.user){
				this.newMensaje(mgs)
			}
		})

		let userUrl = this.props.params.user;

		this.setState({user:userUrl});


	}


	sendMensaje(mensaje){
		let mensajeEnviar = {mensaje:mensaje.mensaje,user:this.state.user,key:uid()}
		let mensajeInsertar = {mensaje:mensaje.mensaje,user:this.state.user,key:uid(),estilo:'itemListChat'}
		this.newMensaje(mensajeInsertar);
		this.socket.emit('mensaje',mensajeEnviar)
	}


	newMensaje(mensaje){
			this.state.mensajes.push(mensaje);
			let mensajes = this.state.mensajes;
			this.setState({mensajes:mensajes})
	}


	render(){
		return <div>
			<a href="#" className="salir">Salir</a>
			<div className="cuadroChat">
			<ListChat conten={this.state.mensajes}/>
			<InputMensaje  onSendMensaje={this.sendMensaje}/>
			</div>
		</div>

	}
}