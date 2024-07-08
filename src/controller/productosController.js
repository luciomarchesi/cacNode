const db = require("../db/db");

const crearProducto = (req, res) => {
  const { nombre, descripcion, foto, precio } = req.body;
  // Verifica si req.file está definido antes de intentar acceder a req.file.filename
  /*if (!req.file) {
    return res.status(400).json({ mensaje: "Debe enviar una imagen" });
  }*/
  //const foto = "req.file.filename";

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

const ObtenerTodosLosProductos = (req, res) => {
  const token = req.cookie.access_token;
  if (!token) {
    return res.status(403).send("Acceso no autorizado");
  }

  try {
    const data = jwt.verify(token, SECRET_KEY);
    console.log(data);
  } catch (error) {
    res.status(401).send("Acceso no autorizado");
  }
  const sql = "SELECT * FROM productos";

  db.query(sql, (err, result) => {
    if (err) throw err;

    res.json(result);
  });
};

module.exports = { crearProducto, ObtenerTodosLosProductos };
