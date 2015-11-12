'use strict';

let express = require('express');
let serveStatic = require('serve-static');
let bodyParse = require('body-parser');
let multer = require('multer');
let http = require('http');
let engine = require('socket.io');
let Routers = require('./Routers');
let port = process.env.PORT || 3000;
let app = express();

let update = function(request,res,next){
	let dataRequest = request.body.data;
}

let newDoc ={registro: [{
  name : "Ch",
  description: "A",
  fecha : 99.00,
  tags : [
    {name : "S", slug : "si"},
    {name : "Ful", slug : "f"}
  ]
}]}

;

app.get('/',function(req,res) {
	res.sendFile(__dirname + '/index.html');
})

app.use(bodyParse.json());
app.use(bodyParse.urlencoded({extended: true}));
//app.use(multer());

app.use('/api/save',Routers.create);
app.use('/api/listar',Routers.listar);

app.use('/public',express.static(__dirname+'/public'));

let handleError = function(res){
	return function(err){
		console.log(err)
		res.send(500,{error:err.message})
	}
}


let server = http.createServer(app).listen(port,function() {
	console.log(` Servidor corriendo en el puerto ${port} `);
})



let io = engine.listen(server);

io.on('connection',function(socket){
	socket.on('mensaje',function(msg){
		console.log("mensaje del socket ")
		io.emit('mensaje',msg)
	})
})
