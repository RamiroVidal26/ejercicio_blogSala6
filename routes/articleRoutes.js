const express = require("express");
const router = express.Router();
const articleController = require("../controllers/articleController");

// Rutas relacionadas a los artículos:
// ...

router.get("/", articleController.index);
router.get("/crear", articleController.create);
router.post("/crear", articleController.store);
router.get("/:id", articleController.show);
router.get("/:id/editar", articleController.edit);
router.post("/:id", articleController.update);
router.get("/:id/eliminar", articleController.destroy);

module.exports = router;
