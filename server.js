require("dotenv").config();
const APP_PORT = process.env.APP_PORT || 3000;
const express = require("express");
const routes = require("./routes");
const methodOverride = require("method-override");
const session = require("express-session");
const { passportConfig, passport } = require("./config/passport");
const makeUserAvailableInViews = require("./middlewares/makeUserAvailableInViews");
const app = express();
//const passport = require("passport");
//const LocalStrategy = require("passport-local");
//const { User } = require("./models");
//const bcrypt = require("bcryptjs");

app.use(methodOverride("_method"));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  }),
);
app.use(passport.session());

passportConfig();
app.use(makeUserAvailableInViews);

routes(app);


app.listen(APP_PORT, () => {
  console.log(`\n[Express] Servidor corriendo en el puerto ${APP_PORT}.`);
  console.log(`[Express] Ingresar a http://localhost:${APP_PORT}.\n`);
});
