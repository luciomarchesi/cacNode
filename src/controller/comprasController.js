const db = require("../db/db");

const crearCompra = (req, res) => {
  const { id_usuario, id_producto_1, id_producto_2, id_producto_3, id_producto_4 } = req.body;

  const sql =
    "INSERT INTO usuarios_productos (id_usuario , id_producto_1 , id_producto_2, id_producto_3, id_producto_4) VALUES (?,?,?,?,?)";

  db.query(
    sql,
    [id_usuario, id_producto_1, id_producto_2, id_producto_3, id_producto_4],
    (err, result) => {
      if (err) {
        console.error("Error al crear posteo:", err);
        return res.status(500).json({ mensaje: "Error al crear posteo" });
      }

      res.json({
        mensaje: "Compra Creada",
        idPosteo: result.insertId,
      });
    }
  );
};

module.exports = { crearCompra };
