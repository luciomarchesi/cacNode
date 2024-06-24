const express = require("express");
const router = express.Router();

const contactoController = require("../controller/contactoControllers");

router.post("/", contactoController.crearContacto);

module.exports = router;
