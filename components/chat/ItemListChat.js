import React from 'react';

export default class ItemListChat extends React.Component{
	render(){
		return 	<div className={this.props.estiloItem} >
				<span>{this.props.user}</span>
				<p>{this.props.mensaje}</p>
			</div>
	}
}



ItemListChat.defaultProps = {estiloItem:"itemListChat2"}