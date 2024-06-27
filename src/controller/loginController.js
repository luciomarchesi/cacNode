const db = require("../db/db"); // Importa la conexión a la base de datos
const { comparePasswords } = require("../utils/hashPassword");

const ObtenerTodosLosUsuarios = (req, res) => {
  const { correo, pass } = req.body; // Obtiene el correo del cuerpo de la solicitud

  const sql = "SELECT * FROM usuarios WHERE correo = ?";

  db.query(sql, [correo], (err, results) => {
    // Usa db.connection para la consulta SQL
    if (err) {
      // Manejo del error
      console.error("Error en la consulta a la base de datos:", err);
      return res.status(500).json({ error: "Error en la consulta a la base de datos" });
    }

    if (results.length === 0) {
      // Si no se encuentra ningún usuario con el email proporcionado
      return res.status(404).json({ error: "Usuario no encontrado" });
    }

    const user = results;

    const isMatch = comparePasswords(pass, user.pass);

    if (!isMatch) {
      // Si las contraseñas no coinciden
      return response.status(401).json({ error: "Contraseña incorrecta" });
    }
    // Si las credenciales son válidas, devolver el usuario (excluyendo la contraseña)
    const userWithoutPassword = { ...user };
    delete userWithoutPassword.pass;
    res.json({ message: "Usuario logueado", user });
  });
};

module.exports = {
  ObtenerTodosLosUsuarios,
};
