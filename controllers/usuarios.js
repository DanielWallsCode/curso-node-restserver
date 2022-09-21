//SOLO SE CREAN FUNCIONES Y SE EXPORTAN
const { response, request } = require('express');


const usuariosGet = (req = request,res = response) => {

    const {q,nombre = 'no name',apikey, page = 1 , limit} = req.query;

    res.json({
        msg:'Get api - Controlador',
        q,
        nombre,
        apikey,
        page,
        limit
    })
};

const usuariosPut = (req,res) => {

    const {id} = req.params;

    res.json({
        msg:'Put api - Controlador',
        id
    })
}

const usuariosPost = (req,res) => {
    //EXTRAER EL BODY
    const {nombre,edad} = req.body;

    res.json({
        msg:'post api - Controlador',
        nombre,
        edad
    })
}

const usuariosDelete = (req,res) => {
    res.status(500).json({
        msg:'delete api - Controlador'
    })
}

module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete
}