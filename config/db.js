const mysql = require('mysql2');

const pool = mysql.createPool({
    //Aca necesito las credenciales para poder hacer la conexion a la base de datos, aca podemos limitar la cantidad de consultas q se pueden hacer a la bd
    host: 'localhost',
    port: 3305,
    user: "root",
    password: "",
    database: "tpObligatorio"
});

module.exports = pool.promise();