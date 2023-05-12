/**
 * Este archivo se utiliza en un proyecto donde se está utlizando server-side
 * rendering (ej: con un motor de templates como EJS). Tiene como objetivo
 * mostrar (renderear) páginas que no están directamente relacionandas con
 * una entidad del proyecto.
 *
 * Ejemplos:
 *   - Página de inicio (Home).
 *   - Página de contacto.
 *   - Página con política de privacidad.
 *   - Página con términos y condiciones.
 *   - Página con preguntas frecuentes (FAQ).
 *   - Etc.
 *
 * En caso de estar creando una API, este controlador carece de sentido y
 * no debería existir.
 */
const { format } = require("date-fns");
const { Article, User } = require("../models");
const passport = require("passport");
const LocalStrategy = require("passport-local");


async function showHome(req, res) {
  const articles = await Article.findAll({
    order: [["createdAt", "DESC"]],
    include: "user",
  });
  //PREGUNTARLE A HERNAN PORQUE NO FUNCIONABA EL INCLUDE SIN EL REQ:REQ.
  return res.render("home", { articles, format, req:req });
}
async function showLogin(req, res) {
  return res.render("login");
}
async function showRegistro(req, res) {
  return res.render("registro");
}
async function showContact(req, res) {
  return res.render("contact");
}

async function showAboutUs(req, res) {
  return res.render("aboutUs");
}

async function showPanel(req, res) {
  const articles = await Article.findAll({
    order: [["createdAt", "DESC"]],
    include: "user",
  });

  if(req.isAuthenticated()){
   return res.render("panel", { articles, format});
  } else {
    console.log(req.isAuthenticated());
   return res.redirect("/usuarios/login");
  }};

// Otros handlers...
// ...

module.exports = {
  showHome,
  showContact,
  showAboutUs,
  showPanel,
  showLogin,
  showRegistro,
  
};
