import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Ingreso from './session/Ingreso';
import AppChat from './chat/AppChat';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css'

let RouteHandler = Router.RouteHandler;

class App extends Component{
	render(){
	return <div>
			<h1 className="titulo">Chat con - React.js y socket.io</h1>
			<RouteHandler />
		</div>
	}
}

//Configuracion de las rutas de la aplicacion 

//Implementando rutas en el DOM, en el div con id container
ReactDOM.render((<Router><div>
	<h1 className="titulo">Chat con - React.js y socket.io</h1>
	<Route exact path="/" component={Ingreso}/>
	<Route   name="chat" path="/chat/:user" component={AppChat}/>
	</div>
</Router>), document.getElementById('root'));
registerServiceWorker();


