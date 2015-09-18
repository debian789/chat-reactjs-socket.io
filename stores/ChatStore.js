import Reflux from 'reflux';
import ChatActions from '../actions/ChatActions';
import $ from 'jquery';






let ChatStore = Reflux.createStore({
	url:'http://pysbuilder.com/api/eventos/subterranica/',
	listenables:[ChatActions],
	listItemChat:[],
	init:function(){
		this.fetchList
	},
	fetchList: function(){
		//debugger;

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



export default ChatStore;