const db = require("../db/db");

const crearProducto = (req, res) => {
  const { nombre, descripcion, precio } = req.body;
  // Verifica si req.file está definido antes de intentar acceder a req.file.filename
  /*if (!req.file) {
    return res.status(400).json({ mensaje: "Debe enviar una imagen" });
  }*/
  const foto = "req.file.filename";

  const sql = "INSERT INTO productos (nombre , descripcion , foto, precio) VALUES (?,?,?,?)";

  db.query(sql, [nombre, descripcion, foto, precio], (err, result) => {
    if (err) {
      console.error("Error al crear posteo:", err);
      return res.status(500).json({ mensaje: "Error al crear posteo" });
    }

    res.json({
      mensaje: "Producto Creado",
      idPosteo: result.insertId,
    });
  });
};

module.exports = { crearProducto };
