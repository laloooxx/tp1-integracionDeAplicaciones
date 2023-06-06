const modeloRutaAlterna = require('../models/modeloRutaAlterna');

exports.getCourses = async (req, res) => {
    const idEstudiante = req.params.id;

    try {
        const estudiante = await modeloRutaAlterna.mostrarCursosDe1Estudiante(idEstudiante);

        if (estudiante == 0){
            res.status(404).json({
                success: false,
                msg: 'No se encontraron cursos para este estudiante'
            })
        }

        res.status(200).json({
            success: true,
            estudiante
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            msg: 'Ocurrió un error al obtener los cursos del estudiante.'
        })
    }
};
