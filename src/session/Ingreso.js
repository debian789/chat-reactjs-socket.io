import React, {Component} from 'react';
import {findDOMNode} from 'react-dom'
// import { Router, Route } from 'react-router'

//Export Permite utilizar este codigo en otras partes del proyecto 
export default class Ingreso extends Component { 
    //Es el evento que se dispara cuando se le da click en el boton submit 
	handleSubmit(event) {
	    event.preventDefault();
		//Buscamos en el DOM el elemento con la referencia "userInput" y obtenemos su valor
		debugger
	    let userInput = findDOMNode(this.refs.userInput).value;
	    //Redireccionamos a la Url pasando los parametros del input 
	    this.props.history.push(`/chat/${userInput}`);	 
	}

	render(){
		//Definir el evento onSubmit que sera disparado cuando se de click  el boton submit
		//Definir el identificador  ref para ubicar el elemento dentro del DOM 
		return <div className="inicioSession">
			<form onSubmit={this.handleSubmit.bind(this)}>
				<input type="text" ref="userInput" placeholder="Name"/>
				<button type="submit" > Ingresar</button>
			</form>
		</div>
	}
}

