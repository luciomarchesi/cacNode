const db = require("../db/db");

const crearPosteo = (req, res) => {
  const { id_usuario, titulo, contenido, foto } = req.body;

  const sql = "INSERT INTO posteos (id_usuario, titulo, contenido, foto) VALUES (?,?,?,?)";

  db.query(sql, [id_usuario, titulo, contenido, foto], (err, result) => {
    if (err) {
      console.error("Error al crear posteo:", err);
      return res.status(500).json({ mensaje: "Error al crear posteo" });
    }

    res.json({
      mensaje: "Posteo Creado",
      idPosteo: result.insertId,
    });
  });
};

module.exports = { crearPosteo };
