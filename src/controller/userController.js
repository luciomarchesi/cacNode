const db = require("../db/db");
const { hashPassword } = require("../utils/hashPassword");

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

const crearUsuario = async (req, res) => {
  const { correo, pass, avatar } = req.body;
  const checkIfExistsQuery = "SELECT COUNT(*) AS count FROM usuarios WHERE correo = ?";

  try {
    // Verificar si ya existe un usuario con el mismo correo
    const [rows] = await db.promise().query(checkIfExistsQuery, [correo]);
    const count = rows[0].count;

    if (count > 0) {
      return res.status(400).json({ error: "Ya existe un usuario con este correo" });
    } else {
      // Si no existe, procedemos a insertar el nuevo usuario
      const sql = "INSERT INTO usuarios (correo, pass, avatar) VALUES (?, ?, ?)";
      const hashedPassword = await hashPassword(pass); // Suponiendo que tienes una función para hashear la contraseña

      const [result] = await db.promise().query(sql, [correo, hashedPassword, avatar]);

      res.json({
        mensaje: "Usuario Creado",
        idUsuario: result.insertId,
      });
    }
  } catch (error) {
    console.error("Error al ejecutar la consulta:", error);
    return res.status(500).json({ error: "Error interno del servidor" });
  }
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
