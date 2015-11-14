'use strict';
//import React from 'react';
//import ItemListChat from './ItemListChat';

let React = require('react');
let ItemListChat = require('./ItemListChat');
let ChatStore = require('../../stores/ChatStore');
let ChatActions = require('../../actions/ChatActions');
let Reflux = require('reflux');
let uid = require('uid');



//export default class ListChat extends React.Component{
//module.exports =  class ListChat extends React.Component{

module.exports = React.createClass({
	mixins: [Reflux.connect(ChatStore, 'chatStore')],

	getDefaultProps:function(){
		return {
			conten:[],
			listadoItemChat:[]
		}
	},
	render:function(){
		//debugger
		//let

    if(this.state.chatStore){
			this.setState({listadoItemChat})
      //debugger;
			//return  <div className="panelListChat">
		//	{

      //  		this.state.chatStore.map(function(itemChat){
      //    	return 	<ItemListChat user={itemChat.user} mensaje={itemChat.mensaje} key={uid()} estiloItem={itemChat.estilo}/>
    //    		})
		//	}

		//			</div>
    }else{
		//	debugger;

		return <div className="panelListChat">
				{
					this.props.conten.map(function (dato) {
						return <ItemListChat user={dato.user} mensaje={dato.mensaje} key={dato.key} estiloItem={dato.estilo}/>
					})
				}
			</div>
		}


		}


})

//ListChat.defaultProps = {conten:[]}
