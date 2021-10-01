const jwt = require('jsonwebtoken');
const { token } = require('morgan');

const crearToken = (id) => {
    const payload = { id }
    return new Promise((resolve, reject) => {
 jwt.sign(payload, process.env.KEYSING, (err, token) =>{
     if(err){
     reject('Error al crear el token', err)
     }
     resolve(token)
 } )

    })

}


module.exports = crearToken;