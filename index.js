'use strict';


let config = require('./config.json');
let express = require('express');
let serveStatic = require('serve-static');
let bodyParse = require('body-parser');
let multer = require('multer');
let massive = require('massive');
let http = require('http');
let engine = require('socket.io');
let AccessData = require('./AccessData').getInstance();

//let connectionString = "postgres://"+config.postgres.user+":"+config.postgres.password+"@"+config.postgres.host+"/"+config.postgres.db;
//let massiveInstance = massive.connectSync({connectionString:connectionString});
//let db;
let port = process.env.PORT || 3000;
let app = express();

let update = function(request,res,next){
	let dataRequest = request.body.data;
	//db.saveDoc({id:1,data:newDoc},function(err,response){
	//	if(err){
	//		handleError(res)
	//	};
	//	res.json({data:response});
	// })
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
	let registro = {
		user:req.body.mensaje,
		mensaje:req.body.user,
		date:req.body.date
	}
		AccessData.crear(registro);

	res.sendStatus(200)
}


let list = function(request,res,next){

	let datosDB=[];

		AccessData.consulta().then(function(vals){
		        vals.forEach(function(dat){
		          datosDB.push(dat.body);
		        });

		      //return {respuesta:200,data:datosDB}
		      res.json(datosDB);

		    })

	// if(!db.conversacion){
	// 	res.send(401);
	// };
	//
	// var options = {
	//   //limit : 10,
	// 	//  order : "id",
	// 	//  offset: 20
	// }
	//
	// let datosDB = [];
	//
	// var promesa = new Promise(function(resolve, reject) {
	// 	db.conversacion.find({},options,function(err,doc){
	// 		if (err) {
	// 			handleError(res)
	// 		};
	//
	// 		if(doc === null){
	// 			res.json({});
	// 		}else{
	// 			resolve(doc);
	// 		}
	// 	});
	//
	// });
	//
	// promesa.then(function(vals){
	// 		vals.forEach(function(dat){
	// 			datosDB.push(dat.body);
	// 		});
	//
	//
	// 	res.json(datosDB);
	//
	// })
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

//app.set('db',massiveInstance);
//db=app.get('db');



//debugger;


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



let io = engine.listen(server);

io.on('connection',function(socket){
	socket.on('mensaje',function(msg){
		console.log("mensaje del socket ")
		io.emit('mensaje',msg)
	})
})
