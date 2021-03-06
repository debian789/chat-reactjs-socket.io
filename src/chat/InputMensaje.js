import React, {Component} from 'react';

export default class InputMensaje extends Component{
	onClick(evento){
		//13 Corresponde a la tecla Enter
		if(evento.keyCode === 13){
			this.props.onSendMensaje.call(null,{mensaje:evento.target.value})
			evento.target.value="";
		}
	}

	render(){
		return <div className="inputChat">
			<input 
			type="text" 			
			placeholder="Escribe un mensaje y preciona la tecla enter " 				
			onKeyDown={this.onClick.bind(this)}/>
		</div>
	}
}
