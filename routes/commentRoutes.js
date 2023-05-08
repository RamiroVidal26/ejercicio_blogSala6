const express = require("express");
const router = express.Router();
const { storeComment } = require("../controllers/commentController");
const { validateComment } = require("../controllers/validateController")

// Rutas relacionadas a los comentarios:
// ...
router.post("/:id", validateComment, storeComment);

module.exports = router;
