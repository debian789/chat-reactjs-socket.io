import React, { findDOMNode }  from 'react';
import { default as Router, Route,Navigation, TransitionHook } from 'react-router';
//Export Permite utilizar este codigo en otras partes del proyecto 
export default React.createClass({
 mixins: [ Navigation, TransitionHook ],
        //Es el evento que se dispara cuando se le da click en el boton submit 
	handleSubmit(event) {
	    event.preventDefault();
	    //Buscamos en el DOM el elemento con la referencia "userInput" y obtenemos su valor
	    let userInput = findDOMNode(this.refs.userInput).value;
	    //Redireccionamos a la Url pasando los parametros del input 
	    this.transitionTo(`/chat/${userInput}`);
	 
	  },
		render(){
		//Definir el evento onSubmit que sera disparado cuando se de click  el boton submit
		//Definir el identificador  ref para ubicar el elemento dentro del DOM 
		return <div className="inicioSession">
			<form onSubmit={this.handleSubmit}>
				<input type="text" ref="userInput" placeholder="Name"/>
				<button type="submit" > Ingresar</button>
			</form>
		</div>
	}
})

