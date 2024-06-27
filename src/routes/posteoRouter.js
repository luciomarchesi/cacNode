const express = require("express");
const router = express.Router();

const posteoController = require("../controller/posteoController");

router.post("/", posteoController.crearPosteo);

module.exports = router;
