const db = require('../config/db');


exports.mostrarUsuario = async () => {
    const [rows,fields] = await db.execute('SELECT * FROM usuarios')
    return rows;
};


exports.crearUsuario = async () => {
    const [rows, fields] = await db.execute('INSERT INTO usarios (username, password, email, nombre, apellido) VALUES (?, ?, ?, ?)',[datos.username, datos.password, datos.email, datos.nombre, datos.apellido])
    return rows;
};