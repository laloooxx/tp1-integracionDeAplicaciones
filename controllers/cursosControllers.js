const cursosModels = require('../models/cursosModels')

exports.getCourses = async (req, res) => {
    try {
        const cursos = await cursosModels.mostrarCursos();
        
        if (cursos.length<1) {
            res.status(404).json({
                succes: false,
                msg: 'Error al mostrar los cursos, no hay cursos ingresados'
            })
        }

        res.status(200).json({
            succes: true,
            msg: 'Estos son los cursos q se encuentran disponibles actualmente',
            cursos
        })
    } catch (error) {
        res.status(500).json({
            succes: false,
            msg: 'No es posible mostrar los cursos'
        })
    }
};


exports.getCoursesById = async (req, res) => {
    const idCursos = req.params.id;

    try {
        const cursos = await cursosModels.obtenerCursosPorId(idCursos)

        if(isNaN (+idCursos)) {
            res.status(404).json({
                success: false,
                msg: 'El id tiene q ser un valor de tipo numerico'
            })
        } else if (cursos.length<1) {
            res.status(402).json({
                success: false,
                msg: `No existe el estudiante con el id ${idCursos}`
            })
        } else {
            res.status(200).json({
                success: true,
                cursos
            })
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            msg: 'Error al obtener los datos del profesor'
        })
    }
};


exports.addCourse = async (req, res) => {
    const cursoData = req.body;

    try {
        const curso = await cursosModels.agregarCurso(cursoData);

        if (curso.length<1) {
            res.status(404).json({
                success: false,
                msg: 'No se puede agregar el curso porque hay datos faltantes'
            })
        }

        res.status(200).json({
            success: true,
            msg: 'El curso fue agregado correctamente',
            curso
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            msg: 'Error al agregar el curso'
        })
    }
};


exports.updateCourse = async (req, res) => {
    const cursoData = req.body;

    const idCurso = req.params.id;

    const curso = {
        idCurso,
        ...cursoData
    }

    try {
        const listaCurso = await cursosModels.actualizarCurso(curso);

        if (listaCurso.length<1) {
            res.status(404).json({
                success: false,
                msg: 'No se puede actualizar el curso porque fallo al ingresar los datos nuevos o falto ingresar algun valor'
            })
        };

        res.status(200).json({
            success: true,
            msg: 'El curso fue actualizado correctamente',
            listaCurso
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            msg: 'El curso no pudo ser actualizado correctamente'
        });
    }
};


exports.deleteCourse = async (req, res) => {
    const idCurso = req.params.id;

    try {
        const curso = await cursosModels.eliminarCurso(idCurso);

        if (isNaN (+idCurso)) {
            res.status(404).json ({
                success: false,
                msg: 'Tiene q ingresar un valor de tipo numerico'
            })
        } else if (!curso) {
            res.status(402).json ({
                success: false,
                msg: `No se encontró el curso con ese id ${idCurso} o no ha ingresado correctamente los campos`
            })
        } else {
            res.status(200).json ({
                success: true,
                msg: 'Curso eliminado correctamente'
            })
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            msg: 'Error al eliminar el curso'
        })
    }
};