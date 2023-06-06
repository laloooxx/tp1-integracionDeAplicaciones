const db = require('../config/db');

exports.mostrarCursosDe1Estudiante = async (idEstudiante) => {
    const [rows, fields] = await db.execute(
        'SELECT c.nombre, c.descripcion FROM cursos c INNER JOIN estudiantes_cursos ec ON c.id = ec.curso_id WHERE ec.estudiante_id = ?', [idEstudiante])
        return rows
};