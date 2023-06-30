//creamos las rutas en el directorio routes
//las definimos y las derivamos al controlador

const express = require('express');
const router = express.Router();
const estudiantesController = require('../controllers/estudiantesControllers');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar_campos');


//le decimos q si viene una petición get en la app lo mandamos a estudiantesController
router.get('/', estudiantesController.getEstudiantes);


//si viene una peticion post pero filtramos por el id, q lo mande al controlador de estudiantes
router.get('/:id', estudiantesController.getStudentById);

//si viene una peticion post q lo mande al controlador de estudiantes
router.post('/',
    [
    check('nombre', 'El nombre es obligatorio').not().isEmpty().isString().trim(),
    check('edad', 'La edad es obligatoria').not().isEmpty().isInt().trim(),
    check('grado', 'El grado es obligatorio').not().isEmpty().trim(),
    validarCampos
    ], estudiantesController.addStudent);

//si viene una peticion put q lo mande al controlador de estudiantes
router.put('/:id', 
    [
        check('nombre', 'El nombre es obligatorio').not().isEmpty().isString().trim(),
        check('edad', 'La edad es obligatoria').not().isEmpty().isInt().trim(),
        check('grado', 'El grado es obligatorio').not().isEmpty().trim(),
        validarCampos
    ], estudiantesController.updateStudent);

//si viene una peticion delete q lo mande al controlador de estudiantes "estudiantesController" y su funcion para eliminar
router.delete('/:id', estudiantesController.removeStudent);

module.exports = router;
