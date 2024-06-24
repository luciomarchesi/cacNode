const mySql = require("mysql2");

const connection = mySql.createConnection({
  host: "localhost",
  user: "root",
  password: "root", // le borre la contraseña "root"
  database: "usuarios_db",
  port: 3306,
});

connection.connect((err) => {
  if (err) {
    console.error("Error conectando a la base de datos", err);
    return;
  }

  console.log("Conectado a la base de datos");

  connection.query("CREATE DATABASE IF NOT EXISTS usuarios_db", (err, results) => {
    if (err) {
      console.log("Error creando la base de datos");
      return;
    }

    console.log("Base de datos asegurada");

    connection.changeUser({ database: "usuarios_db" }, (err) => {
      if (err) {
        console.error("Error al cambiar a usuarios_db", err);
        return;
      }

      const createTableQuery = `
                CREATE TABLE IF NOT EXISTS usuarios (
                  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
                    correo VARCHAR(100) NOT NULL,
                    pass VARCHAR(100) NOT NULL,
                    avatar VARCHAR(255) NOT NULL
                );            
            `;

      connection.query(createTableQuery, (err, results) => {
        if (err) {
          console.log("Error creando la tabla: ", err);
          return;
        }
        console.log("Tabla CREADA");
      });
    });
  });
});

module.exports = connection;
