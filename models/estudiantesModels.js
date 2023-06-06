//aca necesitamos la conexion a la bd para obtener los datos
const db = require('../config/db');

//aca mostramos la lista de estudiantes
exports.obtenerEstudiantes = async () => {
    const [rows, fields] = await db.execute('SELECT * FROM estudiantes')
    return rows;
};

//con este metodo buscamos un solo usuario filtrandolo x su id, su parametro seria el id
exports.obtenerEstudiantesPorId = async (id) => {
    const [rows, fields] = await db.execute('SELECT * FROM estudiantes WHERE id = ?', [id])
    return rows;
};


//agreggamos un estudiante a la lista de estudiantes
exports.agregarEstudiante = async (estudiante) => {
    const [rows, fields] = await db.execute('INSERT INTO estudiantes (nombre, edad, grado) VALUES (?, ?, ?)', [estudiante.nombre, estudiante.edad, estudiante.grado])
    return rows;
};


//actualizamos datos de un estudiante
exports.actualizarEstudiante = async (estudiante) => {
    const [rows, fields] = await db.execute('UPDATE estudiantes SET nombre = ?, edad = ?, grado = ? WHERE id = ?', [estudiante.nombre, estudiante.edad, estudiante.grado, estudiante.idEstudiante])
    return rows;
};



//eliminamos un estudiante
exports.eliminarUnEstudiante = async (id) => {
    const [rows, fields] = await db.execute('DELETE FROM estudiantes WHERE id =?', [id])
    return rows;
};