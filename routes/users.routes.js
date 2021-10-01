const express = require('express');
const router = express.Router();
const  {
    getUsers,
    getUser,
    postUser,
    putUser,
    deleteUser
} = require('../controllers/user.controllers');

const  {validarAgregarUsers,
    validarEditarUsers, 
    validarCampos,
    validarEliminarUser} = require('../middlewares/validarCamposUsers');



router.get('/get-user',getUsers);
router.get('/get-user/:id',getUser);
router.post('/create-user',[validarAgregarUsers(), validarCampos ],postUser);
router.put('/edit-user',[validarEditarUsers(), validarCampos],putUser);
router.delete('/delete-user',[validarEliminarUser(), validarCampos],deleteUser);


module.exports = router
