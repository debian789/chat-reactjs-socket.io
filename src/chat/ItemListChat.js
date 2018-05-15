import React, {Component} from 'react';

export default class ItemListChat extends Component{
	render(){
		// Con this.props.estiloItem optenemos los estilos CSS 
		// que permiten distinguir si es un mensaje entrate o saliente 
		// this.props.user Obtener el nombre del usuario que envio el mensaje 
		// this.props.mensaje Obtener el mensaje que se envio
		return 	<div className={this.props.estiloItem} >
				<span>{this.props.user}</span>
				<p>{this.props.mensaje}</p>
			</div>
	}
}

ItemListChat.defaultProps = {estiloItem:"itemListChat2"}
