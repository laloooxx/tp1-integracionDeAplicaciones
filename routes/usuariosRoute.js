const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuariosControllers');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar_campos');


router.get('/', usuariosController.getUsers)

router.post('/', usuariosController.addUser)


module.exports = router;