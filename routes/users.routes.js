const express = require('express');
const router = express.Router();
const  {
    getUsers,
    getUser,
    postUser,
    putUser,
    deleteUser
} = require('../controllers/user.controllers');


router.get('/',getUsers);
router.get('/:id',getUser);
router.post('/:id',postUser);
router.put('/',putUser);
router.delete('/:id',deleteUser);


module.exports = router
