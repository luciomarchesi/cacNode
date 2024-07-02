const db = require("../db/db"); // Importa la conexión a la base de datos
const { comparePasswords } = require("../utils/hashPassword");

const ObtenerTodosLosUsuarios = (req, res) => {
  const { correo, pass } = req.body; // Obtiene el correo y la contraseña del cuerpo de la solicitud

  const sql = "SELECT * FROM usuarios WHERE correo = ?";

  db.query(sql, [correo], async (err, results) => {
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

    const user = results[0]; // Obtener el primer usuario encontrado

    try {
      const isMatch = await comparePasswords(pass, user.pass);

      if (!isMatch) {
        // Si las contraseñas no coinciden
        return res.status(401).json({ error: "Contraseña incorrecta" });
      } else {
        // Si las credenciales son válidas, devolver el usuario (excluyendo la contraseña)
        const userWithoutPassword = { ...user };
        delete userWithoutPassword.pass;
        res.json({ message: "Usuario logueado", userWithoutPassword });
      }
    } catch (error) {
      console.error("Error al comparar las contraseñas:", error);
      return res.status(500).json({ error: "Error al comparar las contraseñas" });
    }
  });
};

module.exports = {
  ObtenerTodosLosUsuarios,
};
