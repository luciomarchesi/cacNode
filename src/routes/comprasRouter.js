const express = require("express");
const router = express.Router();

const comprasController = require("../controller//comprasController");

router.post("/", comprasController.crearCompra);

module.exports = router;
