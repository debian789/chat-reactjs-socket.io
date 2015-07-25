import express from 'express';
import http from 'http';
import engine from 'socket.io';


const port = 5000;
const app = express();

app.use('/public',express.static(__dirname+'/public'));

app.get('/',(req,res) => {
	res.sendFile(__dirname + '/index.html');


})


let server = http.createServer(app).listen(port,() => {
	console.log(` Servidor corriendo en el puerto ${port} `);
})



const io = engine.listen(server);

io.on('connection',(socket) => {
	socket.on('mensaje',(msg) => {
		console.log("mensaje del socket ")
		io.emit('mensaje',msg)
	})
})

