'use strict';


let config = require('./config.json');
let express = require('express');
let serveStatic = require('serve-static');
let bodyParse = require('body-parser');
let multer = require('multer');
let massive = require('massive');

let http = require('http');
let engine = require('socket.io');

//CREATE TABLE conversacion(id serial PRIMARY KEY, registro JSON);

let connectionString = "postgres://"+config.postgres.user+":"+config.postgres.password+"@"+config.postgres.host+"/"+config.postgres.db;
let massiveInstance = massive.connectSync({connectionString:connectionString});
let db;

let port = process.env.PORT || 3000;
let app = express();


let update = function(request,res,next){
	let newDoc = request.body.data;
	debugger;
	db.steps.saveDoc({id:1,data:newDoc},function(err,response){
		if(err){
			handleError(res)
		};

		console.log(response);
		res.json({data:response});

	})
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


let saveList = function(req,res,next){

	console.log(req.body);
	//console.log(newDoc);
	//db.saveDoc("conversacion",newDoc,function(err,ret){
	//	if(err){
	//		handleError(res);
	//	}
	//	console.log(ret);
	//	res.end('ummmmm')
	//})
}

let list = function(request,res,next){

console.log(db)

if(!db.conversacion){
		//loadDemoData();
		return
	};
	//db.query("SELECT * FROM conversacion;", function(err,doc){
	db.conversacion.findDoc({id:1},function(err,doc){
		if (err) {
			handleError(res)
		};
		console.log(doc);
		if(doc === null){
			console.log('no cargo nada :( ')
				res.json({}); 
		}else{
		res.json(doc); 
			
		}
	});

//res.writeHead(200,{'Content-Type':'text/plain'});
//res.end('hola mundo XD');



}



app.get('/',function(req,res) {
	res.sendFile(__dirname + '/index.html');


})

app.use(bodyParse.json());
app.use(bodyParse.urlencoded({extended: true}));
//app.use(multer());

app.route('/api/list').get(list);
app.route('/api/update').post(update);
app.route('/api/save').post(saveList);


//app.use(serveStatic('./public'));

app.use('/public',express.static(__dirname+'/public'));

app.set('db',massiveInstance);

//initialize();





let handleError = function(res){
	return function(err){
		console.log(err)
		res.send(500,{error:err.message})
	}

}


let server = http.createServer(app).listen(port,function() {

	console.log(` Servidor corriendo en el puerto ${port} `);
})

db=app.get('db');



let io = engine.listen(server);

io.on('connection',function(socket){
	socket.on('mensaje',function(msg){
		console.log("mensaje del socket ")
		io.emit('mensaje',msg)
	})
})


