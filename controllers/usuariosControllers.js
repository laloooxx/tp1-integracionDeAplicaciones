const usuariosModels = require('../models/usuariosModels');
const bcrypt = require('bcryptjs');


exports.getUsers = async (req, res) => {
    try {
        const usuarios = await usuariosModels.mostrarUsuario();

        res.status(200).json({
            ok: true,
            usuarios
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            error: error.message
        });
    }
};


exports.addUser = (req, res) => {
    let { password } = req.body;

    console.log(password);

    const salt = bcrypt.genSaltSync();
        password = bcrypt.hashSync(password, salt);

    console.log(password);

    res.status(200).json({
        ok: true,
        password
    });
};