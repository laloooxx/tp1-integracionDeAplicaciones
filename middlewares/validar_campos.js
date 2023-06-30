const {validationResult } = require('express-validator');
const {response} = require('express');
const { requiere } = require('express');
//la ventaja de ponerle res = response es de cuando pones response. te da todas las opciones
const validarCampos = (req = requiere, res = response, next) => {
    //con el validationREsult traemos los parametros del body requeridos (req)
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
        return res.status(400).json({
            ok: false,
            //el mapped va a mostrar cada uno de los errores q trae el errores creado anteriormente
            errors: errores.mapped()
        });
    }
    next();
};

module.exports = {
    validarCampos
};