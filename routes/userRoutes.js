const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const pagesController = require("../controllers/pagesController");
const passport = require("passport");
// Rutas relacionadas a los usuarios:
// ...

//router.get("/", userController.index);
//router.get("/crear", userController.create);
router.get("/registro", pagesController.showRegistro);
router.post("/registro", userController.store);
router.get("/login", pagesController.showLogin);
router.post("/login", userController.login);
//router.get("/:id", userController.show);
router.patch("/:id", userController.update);
router.delete("/:id", userController.destroy);
router.get("/:id/editar", userController.edit);
router.get("/logout", userController.logout)

module.exports = router;
