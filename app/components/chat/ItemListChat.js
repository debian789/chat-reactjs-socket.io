import React from 'react';
import ItemDinamic from './itemDinamic'

export default class ItemListChat extends React.Component{
	render(){
		return 	<div className={this.props.estiloItem} >
				<span>{this.props.user}</span>
				<ItemDinamic mensaje={this.props.mensaje}></ItemDinamic>
				<p>{this.props.mensaje}</p>
			</div>
	}
}



ItemListChat.defaultProps = {estiloItem:"itemListChat2"}