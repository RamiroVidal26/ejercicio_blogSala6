const express = require("express");
const router = express.Router();
const {
  showHome,
  showContact,
  showAboutUs,
  showLogin,
  showRegistro,
  showPanel,
} = require("../controllers/pagesController");
const { store } = require("../controllers/articleController");

// Rutas relacionadas a la parte pública del sitio web:
// ...
router.get("/", showHome);
router.get("/login", showLogin);
router.post("/login", showPanel);
router.get("/registro", showRegistro);

module.exports = router;
