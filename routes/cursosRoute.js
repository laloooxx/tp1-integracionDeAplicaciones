const express = require('express');
const router = express.Router();
const cursosControllers = require('../controllers/cursosControllers');

router.get('/', cursosControllers.getCourses);

router.get('/:id', cursosControllers.getCoursesById);

router.post('/', cursosControllers.addCourse);

router.put('/:id', cursosControllers.updateCourse);

router.delete('/:id', cursosControllers.deleteCourse);

module.exports = router;