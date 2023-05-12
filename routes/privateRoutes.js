const express = require("express");
const router = express.Router();
const { showPanel } = require("../controllers/pagesController");
const passport = require("passport");
const LocalStrategy = require("passport-local");


// Rutas relacionadas al panel de control (Admin):
// ...
router.get("/", showPanel);


module.exports = router;
