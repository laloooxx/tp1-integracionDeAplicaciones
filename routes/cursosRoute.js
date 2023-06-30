const express = require('express');
const router = express.Router();
const cursosControllers = require('../controllers/cursosControllers');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar_campos');

router.get('/', cursosControllers.getCourses);

router.get('/:id', cursosControllers.getCoursesById);

router.post('/', 
    [
        check("nombre", "El nombre del curso es obligatorio").not().isEmpty().isString().trim(),
        check("descripcion", "La descripcion puede pasar desapercibida, si no estamos seguros de la descripcion ").isString(),
        validarCampos
    ], cursosControllers.addCourse);

router.put('/:id',
    [
        check("nombre", "El nombre del curso es obligatorio").not().isEmpty().isString().trim(),
        check("descripcion", "La descripcion puede pasar desapercibida, si no estamos seguros de la descripcion ").isString(),
        validarCampos
    ], cursosControllers.updateCourse);

router.delete('/:id', cursosControllers.deleteCourse);

module.exports = router;