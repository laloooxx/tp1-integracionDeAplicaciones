//creamos las rutas en el directorio routes
//las definimos y las derivamos al controlador

const express = require('express');
const router = express.Router();
const estudiantesController = require('../controllers/estudiantesControllers');

//le decimos q si viene una petición get en la app lo mandamos a estudiantesController
router.get('/', estudiantesController.getEstudiantes);

//si viene una peticion post pero filtramos por el id, q lo mande al controlador de estudiantes
router.get('/:id', estudiantesController.getStudentById);

//si viene una peticion post q lo mande al controlador de estudiantes
router.post('/', estudiantesController.addStudent);

//si viene una peticion put q lo mande al controlador de estudiantes
router.put('/:id', estudiantesController.updateStudent);

//si viene una peticion delete q lo mande al controlador de estudiantes "estudiantesController" y su funcion para eliminar
router.delete('/:id', estudiantesController.removeStudent);

module.exports = router;
