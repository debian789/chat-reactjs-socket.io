const express = require('express');
const http = require('http');
const engine = require('socket.io')

//si no existe un parametro que asocie el puerto 
//El puerto por defecto sera 3000
const port = process.env.PORT || 3001;
const app = express();

//establecer la carpeta donde buscara los 
//estaticos(.css,.js imagenes etc) 
app.use('/static',express.static(__dirname+'/build/static'));

//esta es la pagina que responde cuando ingrese 
//en este caso respondera un archivo html 
app.get('/',(req,res) => {
	res.sendFile(__dirname + '/build/index.html');
})

//instancia el server y muestra en la consola que se esta //ejecutando y en que puerto 
let server = http.createServer(app).listen(port,() => {
	console.log(` Servidor corriendo en el puerto ${port} `);
})

//se instancia el server 
const io = engine.listen(server);

io.on('connection',(socket) => {
	//Se habilita la escucha para el "mensaje"
	socket.on('mensaje',(msg) => {
		console.log("mensaje del socket ")
		// cuando exista un mensaje se retorna a las conexiones 
                // que esten identificadas como "mensaje"
		io.emit('mensaje',msg)
	})
})
