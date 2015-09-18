import React from 'react';
import { default as Router, Route} from 'react-router';
import Ingreso from './session/Ingreso';
import AppChat from './chat/AppChat';
import ChatActions from '../actions/ChatActions';

let RouteHandler = Router.RouteHandler;







class App extends React.Component{

	probar(event){
		//alert('hola');
		//console.log('hola mundo !!');
		
		ChatActions.fetchList();
		event.preventDefault();

	}
	render(){
		return <div>
				<h1   onClick={this.probar.bind(this)} className="titulo">Chat con - React.js y socket.io</h1>
				<RouteHandler />
			</div>
	}
}

//Configuracion de las rutas de la aplicacion 
let routes = <Route handler={App}>
	<Route path="/" handler={Ingreso}/>
	<Route name="chat" path="chat/:user" handler={AppChat}/>
</Route>


//Implementando rutas en el DOM, en el div con id container
Router.run(routes, Router.HashLlocation, (Root) =>{
	React.render(<Root />,document.getElementById('container'))
})


