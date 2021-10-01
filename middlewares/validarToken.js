const jwt = require('jsonwebtoken');
const users = require('../models/users.models');
require('dotenv').config();

//validar token
const validarToken = async(req, res,next) => {
const token = req.headers.token
if(!token){
    return res.status(400).json('Token invalido')
}
try{
    const { id } = await jwt.verify(token, process.env.KEYSING)
    const datosUsers = await Users.findOne({_id:id , estado: true})

    if(!datosUsers){
        return res.status(400).json('Token invalido')
    }

    req.userRole = datosUsers.role

    next();
}catch(err) {
    return res.status(400).json('Token invalido: ',+ err)
 }
}


module.exports = validarToken;