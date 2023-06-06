const db = require('../config/db');


exports.mostrarEstudiantesde1Curso = async (idCurso) => {
    const [rows, fields] = await db.execute(
        'SELECT e.nombre, e.edad, e.grado FROM estudiantes e INNER JOIN estudiantes_cursos ec ON e.id = ec.estudiante_id WHERE ec.curso_id = ?', [idCurso])
        return rows
};


exports.agregarEstudianteAlCurso = async (idEstudiante, idCurso) => {
    const [rows, fields] = await db.execute(
        'INSERT INTO estudiantes_cursos (estudiante_id, curso_id) VALUES (?, ?)', [idEstudiante, idCurso])
        return rows
};



exports.eliminarEstudianteDelCurso = async (idEstudiante, idCurso) => {
    const [rows, fields] = await db.execute(
        'DELETE FROM estudiantes_cursos WHERE estudiante_id = ? and curso_id = ?', [idEstudiante, idCurso])
    return rows
};