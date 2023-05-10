const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const pagesController = require("../controllers/pagesController");
// Rutas relacionadas a los usuarios:
// ...

router.get("/", userController.index);
router.get("/crear", userController.create);
router.post("/", userController.store);
router.get("/:id", userController.show);
router.get("/:id/editar", userController.edit);
router.patch("/:id", userController.update);
router.delete("/:id", userController.destroy);
router.post("/registro", userController.store);
router.get("/registro", pagesController.showRegistro);

module.exports = router;
