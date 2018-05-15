# Chat con React.js y Socket.io 

Porque no hacer un chat si es tan facil con las tecnologias actuales, y aplicando lo aprendido en platzi, pudes ver el demo en funcionamiento  <a href="http://chat-reactjs.herokuapp.com/" >Aquí</a>

## Descargar proyecto

Descargamos el proyecto con los siguiente comandos 


git clone https://github.com/debian789/chat-reactjs-socket.io.git

cd chat-reactjs-socket.io


## Iniciar el proyecto

En la consola ejecutar los siguientes comandos: 

<pre>
npm install

npm run build 

npm run server 
</pre>

## Interfaz del chat

### Ingresar
![](https://s-media-cache-ak0.pinimg.com/originals/f2/f3/67/f2f36712d9d118cbf4474fd91aeb2c18.jpg)

![alt InicioSesion ](https://s-media-cache-ak0.pinimg.com/originals/70/dc/43/70dc433954a26aeeb6fd9f6a1e4fa9a5.jpg)





### Enviar mensajes
![](https://s-media-cache-ak0.pinimg.com/originals/5c/dc/45/5cdc45ff57f276d4b4bfd3e94113ef44.jpg)

![](https://s-media-cache-ak0.pinimg.com/originals/08/cb/97/08cb97a1ca64cc2b13a1e1efe5a3d0bb.jpg)

# Desplegarlo en producción 

Es necesario hacer unos pequeños ajustes al codigo para iniciarlo, editar el archivo AppChat.js que esta en la ruta components./AppChat.js y modificar la url de socket.io a **this.socket = io('http://localhost:3000');**  por la ruta del servidor donde se desplego Ej: **this.socket = io('https://chat-reactjs.herokuapp.com');**



Miguel Suescun, <a href="https://twitter.com/debian789"> @debian789</a> - [miguelsuescun.co](http://miguelsuescun.co)







