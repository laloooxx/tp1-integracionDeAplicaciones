const express = require('express');
const router = express.Router();
const estudiantes_cursos_controllers = require('../controllers/estudiantes_cursos_controllers');


//las rutas q de la tabla estudiantes_cursos 
router.get('/:id', estudiantes_cursos_controllers.getStudents);

router.post('/:id', estudiantes_cursos_controllers.addStudentToCourse);

router.delete('/curso/:id/estudiante/:idEstudiante', estudiantes_cursos_controllers.deleteStudentToCourse);

module.exports = router;