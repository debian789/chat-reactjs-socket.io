import React from 'react';
import ListChat from './ListChat';
import InputMensaje from './InputMensaje';
import uid from 'uid';
import io from 'socket.io-client';
import {defaultUrlSocket}  from '../../commons/Constans'

export default class AppChat extends React.Component {


    constructor(props) {
        super(props);
        this.state = {mensajes: [], user: ''}
        this.sendMensaje = this.sendMensaje.bind(this);
        this.clearMessage = this.clearMessage.bind(this);
    }

    componentWillMount() {

        // Url de escucha de socket.io, el cliente con  el server
        this.socket = io(defaultUrlSocket);

        //Esta pendiente de recibir informacion desde el server
        this.socket.on('mensaje', (mgs) => {
            if (mgs.user != this.state.user) {
                this.newMensaje(mgs)
            }
        });

        this.socket.on('clear', (data) => {
            this.setState({mensajes: []})
        });

        //Obtiene los parametros que se pasaron por url
        let userUrl = this.props.params.user;

        this.setState({user: userUrl});
    }


    sendMensaje(mensaje) {
        let mensajeEnviar = {mensaje: mensaje.mensaje, user: this.state.user, key: uid()}
        let mensajeInsertar = {mensaje: mensaje.mensaje, user: this.state.user, key: uid(), estilo: 'itemListChat'}
        this.newMensaje(mensajeInsertar);

        //Envia un mensaje al server, este se encarga de reenviarlo a todos
        this.socket.emit('mensaje', mensajeEnviar)
    }


    newMensaje(mensaje) {
        this.state.mensajes.push(mensaje);
        let mensajes = this.state.mensajes;
        // mensaje.mensaje.split('.')[mensaje.mensaje.split('.').length -1 ]
        // mensaje.mensaje.split('.').indexOf("jpg")
        this.setState({mensajes: mensajes})
    }

    clearMessage(data) {
        debugger
        this.socket.emit('clear', "clear")
    }

    render() {
        return <div>
            <a href="#" className="salir">Salir</a>
            <div className="contenedorChant">
                <div className="cuadroChat">
                    <ListChat conten={this.state.mensajes} onClearMessage={this.clearMessage}/>
                    <InputMensaje onSendMensaje={this.sendMensaje}/>
                </div>
            </div>
        </div>

    }
}