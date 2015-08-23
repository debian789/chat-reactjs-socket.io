import React, { findDOMNode }  from 'react';
import { default as Router, Route,Navigation, TransitionHook } from 'react-router';


export default React.createClass({
 mixins: [ Navigation, TransitionHook ],

	handleSubmit(event) {
	    event.preventDefault();
	    let userInput = findDOMNode(this.refs.userInput).value;
	    this.transitionTo(`/chat/${userInput}`);
	 
	  },
		render(){
		return <div className="inicioSession">
			<form onSubmit={this.handleSubmit}>
				<input type="text" ref="userInput" placeholder="Name"/>
				<button type="submit" > Ingresar</button>
			</form>
		</div>
	}
})

