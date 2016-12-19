import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute, hashHistory  } from 'react-router'

import Ingreso from './session/Ingreso';
import AppChat from './chat/AppChat';

let RouteHandler = Router.RouteHandler;

class App extends React.Component{
//			<h1 className="titulo">Chat con - React.js y socket.io</h1>
	render(){
	return <div>
			{this.props.children}
		</div>
	}
}


ReactDOM.render((
   <Router history = {hashHistory}>
      <Route path = "/" component = {App}>
         <IndexRoute component = {Ingreso} />
         <Route path = "ingreso" component = {Ingreso} />
         <Route path = "chat/:user" component = {AppChat} />
      </Route>
   </Router>
	
), document.getElementById('container'))


//Configuracion de las rutas de la aplicacion 
//let routes = <Route handler={App}>
//	<Route path="/" handler={Ingreso}/>
//	<Route name="chat" path="chat/:user" handler={AppChat}/>
//</Route>


//Implementando rutas en el DOM, en el div con id container
//Router.run(routes, Router.HashLlocation, (Root) =>{
//	React.render(<Root />,document.getElementById('container'))
//})


