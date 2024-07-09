const db = require("../db/db");
const jwt = require("jsonwebtoken");
const SECRET_KEY = "***developer_777***";
const { comparePasswords } = require("../utils/hashPassword");

const ObtenerTodosLosUsuarios = (req, res) => {
  const { correo, pass } = req.body;
  const sql = "SELECT * FROM usuarios WHERE correo = ?";

  db.query(sql, [correo], async (err, results) => {
    if (err) {
      console.error("Error en la consulta a la base de datos:", err);
      return res.status(500).json({ error: "Error en la consulta a la base de datos" });
    }

    if (results.length === 0) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }

    const user = results[0];
    try {
      const isMatch = await comparePasswords(pass, user.pass);

      if (!isMatch) {
        return res.status(401).json({ error: "Contraseña incorrecta" });
      } else {
        const userWithoutPassword = { ...user };
        delete userWithoutPassword.pass;
        console.log(process.env.SECRET_KEY)
        const token = jwt.sign(userWithoutPassword, process.env.SECRET_KEY, { expiresIn: "1h" });
        res
          .cookie("access_token", token)
          .json({ message: "Usuario logueado", userWithoutPassword, token });
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
