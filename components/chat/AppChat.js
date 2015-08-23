import React from 'react';
import ListChat from './ListChat';
import InputMensaje from './InputMensaje';
import uid from 'uid';
import io from 'socket.io-client';
import Reflux from 'reflux';
import ChatStore from '../../stores/ChatStore';
import ChatActions from '../../actions/ChatActions';



var AppChat = React.createClass({

mixins: [Reflux.connect(ChatStore, 'ChatStore')],

    getInitialState: function() {
    	return {mensajes:[],user:''};
  	},
	componentWillMount(){

		// Url de escucha de socket.io, el cliente con  el server
		this.socket = io('https://chat-reactjs.herokuapp.com');
		//this.socket = io('http://localhost:3000');

		//Esta pendiente de recibir informacion desde el server
		this.socket.on('mensaje',(mgs) => {
			if(mgs.user != this.state.user){
				this.newMensaje(mgs)
			}
		})

		//Obtiene los parametros que se pasaron por url 
		let userUrl = this.props.params.user;

		this.setState({user:userUrl});


	},


	sendMensaje(mensaje){
		let mensajeEnviar = {mensaje:mensaje.mensaje,user:this.state.user,key:uid()}
		let mensajeInsertar = {mensaje:mensaje.mensaje,user:this.state.user,key:uid(),estilo:'itemListChat'}
		this.newMensaje(mensajeInsertar);
		
		//Envia un mensaje al server, este se encarga de reenviarlo a todos
		this.socket.emit('mensaje',mensajeEnviar)
		ChatActions.fetchList(); 
	},


	newMensaje(mensaje){
			this.state.mensajes.push(mensaje);
			let mensajes = this.state.mensajes;
			this.setState({mensajes:mensajes})
	},


	render(){


		//debugger

		return <div>
			<a href="#" className="salir">Salir</a>
			<div className="cuadroChat">
				<ListChat conten={this.state.mensajes}/>
				<InputMensaje  onSendMensaje={this.sendMensaje}/>
			</div>
		</div>

	}

})


export default AppChat;



// export default class AppChat extends React.Component{

// 	constructor(props){
// 		super(props);
// 		this.state = {mensajes:[],user:''}
// 		this.sendMensaje =this.sendMensaje.bind(this);
// 	}


// 	componentWillMount(){

// 		// Url de escucha de socket.io, el cliente con  el server
// 		this.socket = io('https://chat-reactjs.herokuapp.com');
// 		//this.socket = io('http://localhost:3000');

// 		//Esta pendiente de recibir informacion desde el server
// 		this.socket.on('mensaje',(mgs) => {
// 			if(mgs.user != this.state.user){
// 				this.newMensaje(mgs)
// 			}
// 		})

// 		//Obtiene los parametros que se pasaron por url 
// 		let userUrl = this.props.params.user;

// 		this.setState({user:userUrl});


// 	}


// 	sendMensaje(mensaje){
// 		let mensajeEnviar = {mensaje:mensaje.mensaje,user:this.state.user,key:uid()}
// 		let mensajeInsertar = {mensaje:mensaje.mensaje,user:this.state.user,key:uid(),estilo:'itemListChat'}
// 		this.newMensaje(mensajeInsertar);
		
// 		//Envia un mensaje al server, este se encarga de reenviarlo a todos
// 		this.socket.emit('mensaje',mensajeEnviar)
// 	}


// 	newMensaje(mensaje){
// 			this.state.mensajes.push(mensaje);
// 			let mensajes = this.state.mensajes;
// 			this.setState({mensajes:mensajes})
// 	}


// 	render(){
// 		return <div>
// 			<a href="#" className="salir">Salir</a>
// 			<div className="cuadroChat">
// 				<ListChat conten={this.state.mensajes}/>
// 				<InputMensaje  onSendMensaje={this.sendMensaje}/>
// 			</div>
// 		</div>

// 	}
// }