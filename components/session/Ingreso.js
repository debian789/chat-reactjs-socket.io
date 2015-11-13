'use strict';
let React = require('react');
let ReactDOM = require('react-dom');
let History = require('react-router').History;
//let TransitionHook = require('react-router').TransitionHook;
let Link = require('react-router').Link;

//import React, { findDOMNode }  from 'react';
//import { default as Router, Route,Navigation, TransitionHook } from 'react-router';


//export default React.createClass({
module.exports = React.createClass({
 mixins: [ History ],

	handleSubmit(event) {
	    event.preventDefault();
	    let userInput = ReactDOM.findDOMNode(this.refs.userInput).value;
	    this.history.pushState(null,`/chat/${userInput}`);

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
