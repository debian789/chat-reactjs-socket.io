import express from 'express';
import http from 'http';
import engine from 'socket.io'
import multer from 'multer'
import ext from 'file-extension'

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads')
    },
    filename: function (req, file, cb) {
        cb(null, +Date.now() + '.' + ext(file.originalname))
    }
});


let upload = multer({storage: storage})


const port = process.env.PORT || 3000;
const app = express();

app.use('/public', express.static(__dirname + '/public'));
app.use('/uploads', express.static(__dirname + '/uploads'));

app.post('/upload', upload.single('file'), function (req, res, next) {
    // es.send(req.file)
    res.json({file: req.file.path});
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

let server = http.createServer(app).listen(port, () => {
    console.log(` Servidor corriendo en el puerto ${port} `);
});

const io = engine.listen(server);

io.on('connection', (socket) => {
    socket.on('mensaje', (msg) => {
        console.log("mensaje del socket ");
        socket.broadcast.to(socket.sala).emit('mensaje', msg)
    });

    socket.on('clear', (data) => {
        console.log('clear messaje');
        socket.broadcast.to(socket.sala).emit('clear', data)
    })

    socket.on('join', sala => {
        socket.sala = sala
        socket.join(sala)
    })
});

