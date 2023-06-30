const estudiantesModels = require('../models/estudiantesModels');
const bcrypt = require('bcryptjs');



exports.getEstudiantes = async (req, res) => {
    try {
        //obtenemos los datos desde el modelo
        const estudiantes = await estudiantesModels.obtenerEstudiantes();

        //mostramos en caso de q haya salido todo correcto
        res.status(200).json({
            success: true,
            data: estudiantes
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            msg: "Error al obtener los datos"
        })
    }
};


exports.getStudentById = async (req, res) => {
    //obtengo y almaceno el id enviado desde la ruta o el cliente
    const idStudent = req.params.id;

    try {
        //creamos una variable q va almacenar la informacion q venga de la bd cuando filtremos x id
        const estudiante = await estudiantesModels.obtenerEstudiantesPorId(idStudent);

        //aca consulto si el id es valor numerico
        if (isNaN(+idStudent)){
              res.status(404).json({
                  success: false,
                  msg: 'El id tiene q ser un valor de tipo numerico'
              })
        //preguntamos si el id del estudiante ingresado existe con una condicional 
        } else if (estudiante.length<1){
            res.status(402).json({
                success: false,
                msg: `No existe el estudiante con el id ${idStudent}`
            }) 
        } else {
            //en caso de q el usuario exista lo retorno, esto es lo q se va a ver en caso de q salga todo bien
            res.status(200).json({
                success: true,
                estudiante
            });
        }   
    } catch (error) {
        res.status(500).json({
            success: false,
            msg: 'Error al obtener los datos del estudiante'
    })
    }
};


exports.addStudent = async (req, res) => {
    //creamos una variable q va almacenar la informacion q vamos a pasarle a la peticion
    const estudiante = req.body;
    try {
        //esta variable es la q va almacenar la informacion usada anteriomente
        const estudianteData = await estudiantesModels.agregarEstudiante(estudiante);

        //probamos q devuelva algo la variable estudiante creada anteriormente
        if (estudiante.length<1) {
            res.status(406).json({
                success: false,
                msg: 'No se puede agregar al estudiante al sistema porque no ingreso los datos validos'
            });
        }

        res.status(200).json({
            success: true,
            msg: 'El estudiante fue agregado correctamente'
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            msg: 'No se pudo cargar al estudiante correctamente'
        });
    }
};


exports.updateStudent = async (req, res) => {
    //aca vamos a recibir los datos q queremos actualizar
    const estudianteData = req.body;

    //aca recibimos el id del estudiante q vamos a modificar
    const idEstudiante = req.params.id;

    //creamos una constante donde almacenar todo lo q va a ingresar para actualizar al estudiante
    const studiant = {
        idEstudiante,
        ...estudianteData
    };

    try {
        // const listaEstudiante = await estudiantesModel.actualizarEstudiante(estudiante);
        const listaActualizada = await estudiantesModels.actualizarEstudiante(studiant);
        console.log(listaActualizada);

        if (listaActualizada.length<1) {
            res.status(404).json({
                success: false,
                msg: 'No se puede actualizar el estudiante porque fallo al ingresar los datos nuevos o falto ingresar algun valor'
            })
        }

        res.status(200).json({
            success: true,
            msg: 'Estudiante actualizado correctamente',
            listaActualizada
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            msg: 'Error al actualizar los datos'
        });
    }
};



exports.removeStudent = async (req, res) => {
    //obtengo y almaceno el id q va a ser enviado desde el cliente o la peticion
    const idStudent = req.params.id;
    try {
        //creamos una variable q va almacenar la informacion q venga de la bd cuando filtremos x id
        const estudiante = await estudiantesModels.eliminarUnEstudiante(idStudent);

        //decimos q el id tiene q ser de tipo numerico
        if (isNaN (+idStudent)) {
            res.status(404).json({
                success: false,
                msg: 'El id tiene q ser un valor de tipo numerico'
            })
        //probamos q no devuelve algo vacio
        } else if (idStudent.length<1) {
            res.status(402).json({
                success: false,
                msg: `No existe el estudiante con el id ${idStudent}`
            })
        } else {
            //mostramos q todo salio bien
            res.status(200).json({
                success: true,
                msg: 'Estudiante elimnado correctamente'
            })
        }

    } catch (error) {
        res.status(500).json({
            success: false,
            msg: 'No se pudo eliminar al estudiante'
        })
    }
};
