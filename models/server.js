const cors = require('cors')
const express = require('express');


class Server {

    constructor () {
        this.app = express();
        this.port = process.env.PORT 
        this.usuariosPath = '/api/usuarios'; 

        //MIDLEWARES
        this.midlewares();
        
        //RUTAS DE LA APLICACION
        this.routes();

    }

    midlewares(){
        //C O R S
        this.app.use(cors());

        //Lectura Y Parseo del body
        this.app.use(express.json());

        //DIRECTORIO PUBLICO
        this.app.use( express.static('public') );

    }
    
    routes(){
        this.app.use(this.usuariosPath, require('../routes/user'));
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto', this.port)
        });
    }
}

module.exports = Server;