const express = require("express");
const router = express.Router();
const { showPanel } = require("../controllers/pagesController");
const { store } = require("../controllers/userController");

// Rutas relacionadas al panel de control (Admin):
// ...
router.get("/", showPanel);


module.exports = router;
