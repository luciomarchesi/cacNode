const db = require("../db/db");

const ObtenerTodosLosUsuarios = (req, res) => {
  const sql = "SELECT * FROM usuarios";

  db.query(sql, (err, result) => {
    if (err) throw err;

    res.json(result);
  });
};

const ObtenerUsuarioPorId = (req, res) => {
  const { id } = req.params;
  const sql = "SELECT * FROM usuarios WHERE id = ?";
  db.query(sql, [id], (err, result) => {
    if (err) throw err;
    res.json(result);
  });
};

const crearUsuario = (req, res) => {
  const { correo, pass, avatar } = req.body;

  const checkIfExistsQuery = "SELECT COUNT(*) AS count FROM usuarios WHERE correo = ?";
  db.query(checkIfExistsQuery, [correo], (err, results) => {
    if (err) {
      return res.status(500).json({ error: "Error interno del servidor" });
    }

    const count = results[0].count;
    if (count > 0) {
      // Si count es mayor que 0, significa que ya existe un usuario con ese correo
      return res.status(400).json({ error: "Ya existe un usuario con este correo" });
    } else {
      db.query(sql, [correo, pass, avatar], (err, result) => {
        if (err) throw err;

        res.json({
          mensaje: "Usuario Creado",
          idUsuario: result.insertId,
        });
      });
    }
  });

  const sql = "INSERT INTO usuarios (correo,pass,avatar) VALUES (?,?,?)";
};

const ActualizarUsuario = (req, res) => {
  const { id } = req.params;
  const { nombre, apellido, mail } = req.body;

  const sql = "UPDATE usuarios SET nombre = ?, apellido = ?, mail = ? WHERE id = ?";
  db.query(sql, [nombre, apellido, mail, id], (err, result) => {
    if (err) throw err;

    res.json({
      message: "Usuario editado",
    });
  });
};

const BorrarUsuario = (req, res) => {
  const { id } = req.params;
  const sql = "DELETE FROM usuarios WHERE id= ?";
  db.query(sql, [id], (err, result) => {
    if (err) throw err;

    res.json({
      message: "Usuario eliminado",
    });
  });
};

module.exports = {
  ObtenerTodosLosUsuarios,
  ObtenerUsuarioPorId,
  crearUsuario,
  ActualizarUsuario,
  BorrarUsuario,
};
