'use strict';
//import Reflux from 'reflux';
//import ChatActions from '../actions/ChatActions';
//import $ from 'jquery';

let Reflux = require('reflux');
let ChatActions = require('../actions/ChatActions');
let  $ = require('jquery');







let ChatStore = Reflux.createStore({
	url:'/api/listar',
	listenables:[ChatActions],
	listItemChat:[],
	init:function(){
		this.getListConversacion()
	},
	getListConversacion: function(){
	//	debugger;

		$.ajax({
			url:this.url,
			dataType:'json',
			//jsonpCallback: 'jsonFlickrFeed',
			//jsonpCallback: 'jsonSubterranica',
			cache: false,
			context:this,
			success:function(data){
				console.log(data);
				this.listItemChat = data;
				this.trigger(this.listItemChat);
			}


		})

	}
})


module.exports = ChatStore;
//export default ChatStore;
