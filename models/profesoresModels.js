const db = require('../config/db');


exports.mostrarProfesores = async () => {
    const [rows, fields] = await db.execute('SELECT * FROM profesores')
    return rows;
};


exports.obtenerProfesorPorId = async (id) => {
    const [rows, fields] = await db.execute('SELECT * FROM profesores WHERE id = ?', [id])
    return rows;
};


exports.agregarProfesor = async (profesor) => {
    const [rows, fields] = await db.execute('INSERT INTO profesores (nombre, especialidad, email) VALUES (?, ?, ?)', [profesor.nombre, profesor.especialidad, profesor.email])
    return rows;
};


exports.actualizarProfesor = async (profesor) => {
    const [rows, fields] = await db.execute('UPDATE profesores SET nombre = ?, especialidad = ?, email = ? WHERE id = ?', [profesor.nombre, profesor.especialidad, profesor.email, profesor.idProfesor])
    return rows;
};


exports.eliminarProfesor = async (id) => {
    const [rows, fields] = await db.execute('DELETE FROM profesores WHERE id = ?',[id]);
    return rows;
};