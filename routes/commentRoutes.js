const express = require("express");
const router = express.Router();
const { storeComment } = require("../controllers/commentController");

// Rutas relacionadas a los comentarios:
// ...
router.post("/:id", storeComment);

module.exports = router;
