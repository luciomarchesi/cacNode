const db = require("../db/db");

const crearProducto = (req, res) => {
  const { nombre, descripcion, foto } = req.body;

  const sql = "INSERT INTO productos (nombre , descripcion , foto) VALUES (?,?,?)";

  db.query(sql, [nombre, descripcion, foto], (err, result) => {
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
