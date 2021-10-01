const users = require('../models/users.models');
const crearToken = require('../helpers/crearToken');
const bcrypt = require('bcrypt');

const loginController = async(req, res) => {
    try{
        const {email, password} = req.body
        const user = await users.findOne( { email:email })
        if(!users){
            res.status(400).json('credenciales incorrectas')
        }
       const existUser =  bcrypt.compare(password, user.password)
        if(!existUser){
            res.status(400).json('credenciales incorrectas')
        }

        const token = await crearToken(user._id)
        res.status(200).json({token})

    }catch(err) {
        console.err('Hubo un error en el loginController', err)
        res.status(400).json(err)
    }



}

module.exports = {loginController};