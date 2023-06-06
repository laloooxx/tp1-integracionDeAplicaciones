const profesoresModels = require('../models/profesoresModels');

exports.getProfesores = async (req, res) => {
    try {
        const profesores = await profesoresModels.mostrarProfesores();

        res.status(200).json({
            success: true,
            profesores
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            msg: 'No se pudo mostrar los profesores'
        });
    }
};


exports.getProfesoresById = async (req, res) => {
    const idProfesor = req.params.id;
    try {
        const profesor = await profesoresModels.obtenerProfesorPorId(idProfesor);

        if(isNaN (+idProfesor)) {
            res.status(404).json({
                success: false,
                msg: 'El id tiene q ser un valor de tipo numerico'
            })
        } else if (profesor.length<1) {
            res.status(402).json({
                success: false,
                msg: `No existe el estudiante con el id ${idProfesor}`
            })
        } else {
            res.status(200).json({
                success: true,
                profesor
            })
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            msg: 'Error al obtener los datos del profesor'
        })
    }
};


exports.addProfesor = async (req, res) => {
    const profesorData = req.body;

    try {
        const profesor = await profesoresModels.agregarProfesor(profesorData);

        res.status(200).json({
            success: true,
            msg: 'El profesor fue agregado correctamente',
            profesor
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            msg: 'El profesor no pudo ser agregado correctamente'
        });
    }
};


exports.updateProfesor = async (req, res) => {
    const profesorData = req.body;

    const idProfesor = req.params.id;

    const profesor = {
        idProfesor,
        ...profesorData
    }

    // console.log(profesor)
    try {
        const listaProfesor = await profesoresModels.actualizarProfesor(profesor);
        
        if (listaProfesor.length<1) {
            res.status(404).json({
                success: false,
                msg: 'No se puede actualizar el profesor porque fallo al ingresar los datos nuevos o falto ingresar algun valor'
            })
        }

        res.status(200).json({
            success: true,
            msg: 'El profesor fue actualizado correctamente',
            listaProfesor
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            msg: 'El profesor no pudo ser actualizado correctamente'
        })
    }
};


exports.deleteProfesor = async (req, res) => {
    const idProfesor = req.params.id;

    try {
        const profesor = await profesoresModels.eliminarProfesor(idProfesor);

        if (isNaN (+idProfesor)) {
            res.status(404).json ({
                success: false,
                msg: 'Tiene q ingresar un valor de tipo numerico'
            })
        } else if (!profesor) {
            res.status(402).json ({
                success: false,
                msg: `No se encontró el profesor con ese id ${idProfesor} o no ha ingresado correctamente los campos`
            })
        } else {
            res.status(200).json ({
                success: true,
                msg: 'Profesor eliminado correctamente',
            })
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            msg: 'Error al intentar eliminar al profesor'
        })
    }
};