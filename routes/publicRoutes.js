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


// Rutas relacionadas a la parte pública del sitio web:
// ...
router.get("/", showHome);
//outer.get("/login", showLogin);
//router.post("/login", showPanel);
router.get("/registro", showRegistro);

module.exports = router;
