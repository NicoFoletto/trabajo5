const { check, validationResult} = require('express-validator');

//validacion de agregar usuarios
 const validarAgregarUsers = () => {
return [
    check('email', 'Email invalido')
        .isEmail()
        .normalizeEmail()
        .trim()
        .escape(),
    check('password', 'Password invalido')
    .trim()
    .escape()
    .isLength({min: 8})

]

 }

 //validacion de edicion de usuario
 const validarEditarUsers = () => {
    return [
        check('email', 'Email invalido')
            .isEmail()
            .normalizeEmail()
            .trim()
            .escape(),
        check('password', 'Password invalido')
        .trim()
        .escape()
        .isLength({min: 8})
    
    ]
    
     } 

     //Validacion de eliminacion de usuario
     const validarEliminarUser = () => {
         return [
             check('id', 'id invalida')
             .isMongoId()
             .trim()
             .escape()
         ]
     }

     //Validacion de los campos
   const  validarCampos = (req,res,next) => {
       const error = validationResult(req)
       if(!error.isEmpty()) {
           req.status(400).json('Parametros invalidos', + error)
       }
       next()
   }
    
     module.exports = {validarAgregarUsers,
         validarEditarUsers, 
         validarCampos,
         validarEliminarUser};