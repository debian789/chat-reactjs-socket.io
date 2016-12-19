import React from 'react';


export default class InputMensaje extends React.Component{

	focus(e) {
		this.props.onSendMensaje.call(null,{mensaje:this.textInput.value})
		this.textInput.value ="";
		e.preventDefault()
	}

	onClick(evento){
		//13 Corresponde a la tecla Enter
		if(evento.keyCode == 13){
			this.props.onSendMensaje.call(null,{mensaje:evento.target.value})
			evento.target.value="";
		}

	}

	render(){
		return <div className="inputChat">			
			<input 
				type="text" 			
				placeholder="Escribe un mensaje..." 				
				onKeyDown={this.onClick.bind(this)}
				ref={(input)=> { this.textInput = input;}}
			/>
			<button onClick={this.focus.bind(this)} > &#62; </button>
		</div>
	}
}