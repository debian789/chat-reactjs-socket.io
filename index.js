import express from 'express';
import http from 'http';
import engine from 'socket.io'

//si no existe un parametro que asocie el puerto 
//El puerto por defecto sera 3000
const port = process.env.PORT || 3000;
const app = express();

//establecer la carpeta donde buscara los 
//estaticos(.css,.js imagenes etc) 
app.use('/public',express.static(__dirname+'/public'));

//esta es la pagina que responde cuando ingrese 
//en este caso respondera un archivo html 
app.get('/',(req,res) => {
	res.sendFile(__dirname + '/index.html');
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
