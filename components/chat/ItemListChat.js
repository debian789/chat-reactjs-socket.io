'use strict';
//import React from 'react';
let React = require('react');


//export default class ItemListChat extends React.Component{
module.exports =  React.createClass({

	getDefaultProps:function(){
		return{
			estiloItem:"itemListChat2"
		}

	},

	render:function(){
		return 	<div className={this.props.estiloItem} >
				<span>{this.props.user}</span>
				<p>{this.props.mensaje}</p>
			</div>
	}
});



//ItemListChat.defaultProps = {estiloItem:"itemListChat2"}
