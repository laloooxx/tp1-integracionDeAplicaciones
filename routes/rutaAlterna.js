const express = require('express');
const router = express.Router();
const controllerRutaAlterna = require('../controllers/controllerRutaAlterna')

router.get('/:id', controllerRutaAlterna.getCourses);


module.exports = router;