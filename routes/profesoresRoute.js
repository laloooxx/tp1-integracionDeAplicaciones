const express = require('express');
const router = express.Router();
const profesoresController = require('../controllers/profesoresControllers') 


router.get('/', profesoresController.getProfesores);

router.get('/:id', profesoresController.getProfesoresById);

router.post('/', profesoresController.addProfesor);

router.put('/:id', profesoresController.updateProfesor);

router.delete('/:id', profesoresController.deleteProfesor);

module.exports = router;