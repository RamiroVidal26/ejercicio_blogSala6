const passport = require("passport");
const LocalStrategy = require("passport-local");
const {User} = require("../models");
const bcrypt = require("bcryptjs");


function passportConfig(){

passport.use(
    new LocalStrategy(
      {
        usernameField: "email",
        passwordField: "password",
      },
      async function (email, password, done) {
        try {
          const loginUser = await User.findOne({ where: { email } });
          if (!loginUser) {
            return done(null, false, { message: "Credenciales incorrectas!" });
          }
          const checkPasswords = await bcrypt.compare(password, loginUser.password);
          if (!checkPasswords) {
            return done(null, false, { message: "Credenciales incorrectas!" });
          }
          return done(null, loginUser);
        } catch (error) {
          
        }
      },
    ),
  );
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });
  
  passport.deserializeUser(async function (id, done) {
    try {
      const user = await User.findByPk(id);
      done(null, user);
    } catch (error) {
      done(error);
    }
  });
}

module.exports = {passportConfig, passport}
  