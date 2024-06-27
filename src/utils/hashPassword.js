const bcrypt = require("bcrypt");

const saltRounds = 10; // El número de rondas de hash para la sal, cuantas más rondas, más seguro, pero más lento

// Función para hashear una contraseña
const hashPassword = async (password) => {
  try {
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
  } catch (error) {
    throw new Error("Error al hashear la contraseña");
  }
};

// Función para verificar una contraseña hasheada
const comparePasswords = async (password, hashedPassword) => {
  try {
    const match = await bcrypt.compare(password, hashedPassword);
    return match;
  } catch (error) {
    throw new Error("Error al comparar las contraseñas");
  }
};

module.exports = {
  hashPassword,
  comparePasswords,
};
