'use strict';
//import React from 'react';
//import ItemListChat from './ItemListChat';

let React = require('react');
let ItemListChat = require('./ItemListChat');


//export default class ListChat extends React.Component{
//module.exports =  class ListChat extends React.Component{

module.exports = React.createClass({

	getDefaultProps:function(){
		return {
			conten:[]
		}
	},
	render:function(){

		return <div className="panelListChat">
				{
					this.props.conten.map(function (dato) {
						return <ItemListChat user={dato.user} mensaje={dato.mensaje} key={dato.key} estiloItem={dato.estilo}/>
					})
				}
			</div>
		}


})

//ListChat.defaultProps = {conten:[]}
