const express = require("express");
const router = express.Router();

const productosController = require("../controller/productosController");

router.post("/", productosController.crearProducto);
router.get("/", productosController.ObtenerTodosLosProductos);

module.exports = router;
