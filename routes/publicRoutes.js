const express = require("express");
const router = express.Router();
const {
  showHome,
  showContact,
  showAboutUs,
  showLogin,
  showRegistro,
} = require("../controllers/pagesController");

// Rutas relacionadas a la parte pública del sitio web:
// ...
router.get("/login", showLogin);
router.get("/registro", showRegistro);
module.exports = router;
