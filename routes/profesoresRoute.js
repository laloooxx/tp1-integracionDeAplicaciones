const express = require('express');
const router = express.Router();
const profesoresController = require('../controllers/profesoresControllers'); 
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar_campos');


router.get('/', profesoresController.getProfesores);

router.get('/:id', profesoresController.getProfesoresById);

router.post('/',
    [
        check('nombre', 'El nombre del profesor es obligatorio').not().isEmpty().isString().trim(),
        check('especialidad','La especialidad del profesor es obligatoria').not().isEmpty().isString().trim(),
        check('email').trim().isEmail(),
        validarCampos
    ], profesoresController.addProfesor);

router.put('/:id', 
    [
        check('nombre', 'El nombre del profesor tiene q ser ingresado de forma correcta').not().isEmpty().isString().trim(),
        check('especialidad', 'La especialidad del profesor es obligatoria').not().isEmpty().isString().trim(),
        check('email', 'El email del profesor es obligatorio').isEmail().trim(),
        validarCampos
    ], profesoresController.updateProfesor);

router.delete('/:id', profesoresController.deleteProfesor);

module.exports = router;