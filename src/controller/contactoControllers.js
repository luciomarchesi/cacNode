const db = require("../db/db");

const crearContacto = (req, res) => {
  const { nombre, numero_telefono, genero, correo, texto_mensaje } = req.body;

  const sql =
    "INSERT INTO contacto (nombre, numero_telefono, genero, correo, texto_mensaje) VALUES (?,?,?,?,?)";

  db.query(sql, [nombre, numero_telefono, genero, correo, texto_mensaje], (err, result) => {
    if (err) throw err;

    res.json({
      mensaje: "Contacto Creado",
      idUsuario: result.insertId,
    });
  });
};

module.exports = { crearContacto };
