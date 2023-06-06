//es el intermediario entre el .env y el resto de nuestra api, para cuidar la informacion de la base de datos

const config = require('dotenv');


const dbConfig = () => {
    return {
    //Definimos las credenciales, para no poner los valores de la bd de forma literal, para q no cuaqlquiera pueda ver los datos
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD 
    }    
}

module.exports = dbConfig();