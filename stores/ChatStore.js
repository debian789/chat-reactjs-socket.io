import Reflux from 'reflux';
import ChatActions from '../actions/ChatActions';
import $ from 'jquery';


let ChatStore = Reflux.createStore({
	url:'https://api.flickr.com/services/feeds/photos_public.gne?format=json&tag=cats',
	listenables:[ChatActions],
	listItemChat:[],
	init:function(){
		this.fetchList
	},
	fetchList: function(){
		//debugger;

		$.ajax({
			url:this.url,
			dataType:'jsonp',
			jsonpCallback: 'jsonFlickrFeed',
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