'use strict';
//import React from 'react';
let React = require('react');
let ReactDOM = require('react-dom');
//import { render } from 'react-dom'
let render = require('react-dom').render;
var Router = require('react-router').Router;
var Route = require('react-router').Route;
let Ingreso = require('./session/Ingreso');
let AppChat = require('./chat/AppChat');
let ChatActions = require('../actions/ChatActions');
//import  ReactDOM from 'react-dom';
//import { default as Router, Route} from 'react-router';
//import Ingreso from './session/Ingreso';
//import AppChat from './chat/AppChat';
//import ChatActions from '../actions/ChatActions';


//let RouteHandler = Router.RouteHandler;


let NoPage = React.createClass({
	render:function(){
		return <div><h1>Pagina no encontrada</h1></div>
	}
})



let App = React.createClass({

	probar:function(event){
		//alert('hola');
		//console.log('hola mundo !!');

		// ChatActions.getListConversacion();
		// event.preventDefault();

		return <h1 >Chat con - React.js y socket.io</h1>


	},

	render:function(){
		return (<div><h1 onClick={this.probar} className="titulo">Chat con - React.js y socket.io</h1>  {this.props.children}</div>)
	}
})

//Configuracion de las rutas de la aplicacion
//let routes =


//Implementando rutas en el DOM, en el div con id container
//Router.run(routes, Router.HashLlocation, (Root) =>{
//	ReactDOM.render(<Root />,document.getElementById('container'))
//})


		//	<Route path="index" handler={Ingreso}/>
		//	<Route name="chat" path="chat/:user" handler={AppChat}/>
			//<Route path="*" handler={NoPage}/>
//	<Route>
//		<Route path="/" handler={App}>
//		</Route>
//	</Route>


//render( (
//<Router></Router>

//),document.getElementById('container') )

render((
  <Router>
    <Route component={App}>
      <Route path="/" component={Ingreso} />
      <Route path="chat/:user" component={AppChat}>
        <Route path="*" component={NoPage} />
      </Route>
    </Route>
  </Router>
),document.getElementById('container'))
