import React from 'react';
import { default as Router, Route} from 'react-router';
import Ingreso from './session/Ingreso';
import AppChat from './chat/AppChat';

let RouteHandler = Router.RouteHandler;

class App extends React.Component{
	render(){
	return <div>
	<h1 className="titulo">Chat con - React.js y socket.io</h1>
	
	<RouteHandler />
	</div>
	}
}

let routes = <Route handler={App}>
	<Route path="/" handler={Ingreso}/>
	<Route name="chat" path="chat/:user" handler={AppChat}/>
</Route>

Router.run(routes, Router.HashLlocation, (Root) =>{
	React.render(<Root />,document.getElementById('container'))
})


