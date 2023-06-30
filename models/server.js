const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const router = require('./../routes/estudiantesRoute');


//aca creamos nuestro servidor local, como una clase
class Server {
    constructor() {
        this.app = express();
        this.middlewares();
        this.routes(); 
    }


    //definimos los middlewares q vamos a utilizar
    middlewares() {
        this.app.use(express.json());
        this.app.use(cors());
        this.app.use(morgan());
    }

    //definimos las rutas q va a tener nuestra API
    routes() {
        this.app.use('/api/estudiantes', require('./../routes/estudiantesRoute'));
        this.app.use('/api/profesores', require('./../routes/profesoresRoute'))
        this.app.use('/api/cursos', require('./../routes/cursosRoute'));
        this.app.use('/api/estudiantes_cursos', require('./../routes/estudiantes_cursos_route'));
        //aca creamos una ruta extra para un comando q no sabia como ponerlo
        this.app.use('/api/estudiantes_cursos/curso', require('./../routes/rutaAlterna'));
        this.app.use('/api/users', require('.././routes/usuariosRoute'));
    }

    listen() {
        this.app.listen(3000, () => {
            console.log('Server running in port 3000')
        });
    };
};

module.exports = Server;
