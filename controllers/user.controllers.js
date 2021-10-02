const users = require('../models/users.models');
const bcrypt = require('bcrypt');


const getUsers = async(req, res) => {
    try {
        const allUsers = await users.find()
        res.status(200).json(allUsers)
        
    } catch (err) {
        console.err('Hubo un error en el controlador get', err)
        res.status(500).json(err)
        
        
    }
   
}

const getUser = async (req, res) => {
     try {
         const unUser = await users.findById(req.params.id)
         res.status(200).json(unUser)
     } catch (err) {
          console.err('Hubo un error en el controlador getUser', err)
        res.status(404).json(err)
        
        
    }
    
}

const postUser = async (req, res) => {
    //console.log('Hi hi')
     try {
         const { email, password } = req.body
         const newPassword = await bcrypt.hash(password, 10)
         const newUser = new users({ email, password: newPassword })
         newUser.save()
         res.status(201).json('Usuario creado correctamente')
    } catch (err) {
         console.err('Hubo un error en el controlador postUser', err)
        res.status(403).json(err)
        
    }
    
}

const putUser = async (req, res) => {
    try {
        const { email, password } = req.body
            const newPassword = await bcrypt.hash(password, 10)
            await users.findByIdAndUpdate(req.params.id, {email, password: newPassword }) 
        res.status(203).json('usuario editado correctamente')
    } catch (err) {
         console.err('Hubo un error en el controlador putUser', err)
        res.status(402).json(err)

    }
    
}

const deleteUser = async (req, res) => {
     try {
         await users.findByIdAndUpdate(req.body.id, { estado: false })
         res.status(203).json('Usuario borrado correctamente')
    } catch (err) {
        
        
    }
    
}




module.exports = {
    getUsers,
    getUser,
    postUser,
    putUser,
    deleteUser
}