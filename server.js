require("dotenv").config();

const express = require("express");
const routes = require("./routes");
const APP_PORT = process.env.APP_PORT || 3000;
const app = express();
const methodOverride = require("method-override");
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local");

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.session());

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    async function (email, password, done) {
      try {
        const loginUser = await User.findOne({ where: { email: email } });
        if (!loginUser) {
          return done(null, false, { message: "Credenciales incorrectas!" });
        } 
        const checkPasswords = await bcrypt.compare(password, loginUser.password);
        if(!checkPasswords){
          return done(null, false, {message: "Credenciales incorrectas!"})
        }
        return done (null, userLogin);
      } catch (error) {
        console.log(error);
      }
    })
);
passport.serializeUser(function (user, done){
  document(null, user.id);
});

passport.deserializeUser(async function (id, done){
  try {
    const user = await User.findByPk(id);
    done(null, user);
  } catch (error) {
    done(error);
  }
});
//NO ENTIENDO PORQUE HERNAN USO RES.SEND CON UN STRING
app.get("/login", async function (req, res){
  if (req.isAuthenticated()){
    res.render("/admin");
  } else {
    res.redirect("/registro");
  }
});
app.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/admin",
    failureRedirect: "/registro",
  })
);

app.use(methodOverride("_method"));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

routes(app);

app.listen(APP_PORT, () => {
  console.log(`\n[Express] Servidor corriendo en el puerto ${APP_PORT}.`);
  console.log(`[Express] Ingresar a http://localhost:${APP_PORT}.\n`);
});
