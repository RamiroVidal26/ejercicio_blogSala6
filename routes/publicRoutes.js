const express = require("express");
const router = express.Router();
const { showHome, showContact, showAboutUs } = require("../controllers/pagesController");

// Rutas relacionadas a la parte pública del sitio web:
// ...
router.get("/", showHome);

module.exports = router;
