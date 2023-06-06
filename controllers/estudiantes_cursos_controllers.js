const estudiantes_cursos_models = require('../models/estudiantes_cursos_Models');

//creamos una funcion para mostrar a los estudiantes de un curso
exports.getStudents = async (req, res) => {
    //lo q vamos a requerir q venga con la url
    const idCurso = req.params.id;

    try {
        //decimos q espere para ir al modelo de la bd
        const curso = await estudiantes_cursos_models.mostrarEstudiantesde1Curso(idCurso);
        
        //preguntamos si es igual a 0 el id q viene, en caso q sea asi retornamos un mensaje de error
        if (curso == 0) {
            res.status(404).json({
                success: false,
                msg: 'No se encontraron estudiantes que asistan a ese curso'
            })
        }

        //mostramos q todo salio bien
        res.status(200).json({
            success: true,
            msg: `El curso ${idCurso} tiene a estos estudiantes`,
            curso
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            msg: 'Ocurrió un error al obtener a los estudiantes del curso.'
        })
    }
};

//creamos una funcion para añadir un estudiante a un curso
exports.addStudentToCourse = async (req, res) => {
    const idCurso = req.params.id;

    const { idEstudiante } = req.body;

    try {
        const curso = await estudiantes_cursos_models.agregarEstudianteAlCurso(idEstudiante, idCurso);
        
        if (curso.length<1) {
            res.status(404).json({
                success: false,
                msg: 'Estudiante o curso no encontrado'
            })
        }

        res.status(200).json({
            success: true,
            msg: 'Estudiante agregado correctamente al curso'
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            msg: 'Ocurrio un rrror al querer agregar un estudiante al curso'
        })
    }
};


//creamos una funcion para eliminar un estudiante de un curso
exports.deleteStudentToCourse = async (req, res) => {
    const idCurso = req.params.id;
    const idEstudiante = req.params.idEstudiante;

    try {
        const curso = await estudiantes_cursos_models.eliminarEstudianteDelCurso(idEstudiante, idCurso);

        if (curso.length<1) {
            res.status(400).json({
                success: false,
                msg:'No se encontró al estudiante o al curso'
            })
        }

        res.status(200).json({
            success: true,
            msg: 'Estudiante eliminado correctamente'
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            msg: 'Ocurrio un rrror al querer eliminar a un estudiante'
        })
    }
};