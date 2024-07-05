require("dotenv").config();

const mySql = require("mysql2");

const connection = mySql.createConnection({
  host: "localhost",
  user: "root",
  password: "root", // le borre la contraseña "root"
  database: "usuarios_db",
  port: 3306,

  /*host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_HOST_PASSWORD, // le borre la contraseña "root"
  database: process.env.DB_NAME

});

connection.connect((err) => {
  if (err) {
    console.error("Error conectando a la base de datos", err);
    return;
  }
  console.log("Conectado a la base de datos");

  connection.query(
    `CREATE DATABASE IF NOT EXISTS ${process.env.DB_NAME}`,
    (err, results) => {
      if (err) {
        console.log("Error creando la base de datos: ", err);
        return;
      }
      console.log("Base de datos asegurada");

      connection.changeUser({ database: process.env.DB_NAME }, (err) => {
        if (err) {
          console.error(`Error al cambiar a ${process.env.DB_NAME}`, err);
          return;
        }

        const createTableQuery = `
                CREATE TABLE IF NOT EXISTS usuarios (
                  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
                    correo VARCHAR(100) NOT NULL,
                    pass VARCHAR(100) NOT NULL,
                    avatar VARCHAR(255) 
                );            
            `;

        const createTableContactoQuery = `
              CREATE TABLE IF NOT EXISTS contacto (
                id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
                  nombre VARCHAR(100) NOT NULL,
                  numero_telefono VARCHAR(20) NOT NULL,
                  genero ENUM('Masculino', 'Femenino', 'Otro') NOT NULL,
                  correo VARCHAR(100) NOT NULL,
                  texto_mensaje TEXT NOT NULL
                );
            `;
        const createTablePosteosQuery = `
              CREATE TABLE IF NOT EXISTS posteos (
             id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
               id_usuario INT NOT NULL,
             titulo VARCHAR(255) NOT NULL,
              contenido TEXT NOT NULL,
             foto VARCHAR(255),
             FOREIGN KEY (id_usuario) REFERENCES usuarios(id)
              );
            `;
        const createTableProductosQuery = `
            CREATE TABLE IF NOT EXISTS productos (
             id INT PRIMARY KEY AUTO_INCREMENT,
             nombre VARCHAR(255) NOT NULL,
             descripcion TEXT,
             foto VARCHAR(255),
             precio INT
              );
            `;
        const createTableUsuarios_ProductosQuery = `
            CREATE TABLE IF NOT EXISTS usuarios_productos (
             id INT PRIMARY KEY AUTO_INCREMENT,
             id_usuario INT,
             FOREIGN KEY (id_usuario) REFERENCES usuarios(id),
             fecha_compra DATE, 
             total DECIMAL(10, 2),  
    
             id_producto_1 INT,
              id_producto_2 INT,
             id_producto_3 INT,
             id_producto_4 INT,
        
             FOREIGN KEY (id_producto_1) REFERENCES productos(id),
             FOREIGN KEY (id_producto_2) REFERENCES productos(id),
             FOREIGN KEY (id_producto_3) REFERENCES productos(id),
             FOREIGN KEY (id_producto_4) REFERENCES productos(id)
);
            `;

        connection.query(createTableQuery, (err, results) => {
          if (err) {
            console.log("Error creando la tabla: ", err);
            return;
          }
          console.log("Tabla Usuarios Creada");
        });
        connection.query(createTableContactoQuery, (err, results) => {
          if (err) {
            console.log("Error creando la tabla contacto: ", err);
            return;
          }
          console.log("Tabla contacto creada");
        });
        connection.query(createTablePosteosQuery, (err, results) => {
          if (err) {
            console.log("Error creando la tabla contacto: ", err);
            return;
          }
          console.log("Tabla Posteos creada");
        });
        connection.query(createTableProductosQuery, (err, results) => {
          if (err) {
            console.log("Error creando la tabla contacto: ", err);
            return;
          }
          console.log("Tabla Productos creada");
        });
        connection.query(createTableUsuarios_ProductosQuery, (err, results) => {
          if (err) {
            console.log("Error creando la tabla contacto: ", err);
            return;
          }
          console.log("Tabla Usuarios_Productos creada");
        });
      });
    }
  );
});

module.exports = connection;
