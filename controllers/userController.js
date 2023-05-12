const { User } = require("../models");
const {passport} = require("../config/passport")
const bcrypt = require("bcryptjs");


// Display a listing of the resource.
async function index(req, res) {}

// Display the specified resource.
async function login(req, res) {
  passport.authenticate("local", {
    successRedirect: "/panel",
    failureRedirect: "/usuarios/registro",
    //failureFlash: true,
  })(req, res);
}
async function logout(req, res) {
  req.session.destroy(function(error){
    console.log("algun texto");
    return res.redirect("/");
  })
}
// Show the form for creating a new resource
async function create(req, res) {}

// Store a newly created resource in storage.
async function store(req, res) {
  const { firstname, lastname, email, password } = req.body;
  console.log(firstname, lastname, email, password);
  const existingUser = await User.findOne({ where: { email } });

  if (existingUser) {
    return res.status(400).send("El correo electrónico ya está registrado");
  } else {
    const hashedPassword = await bcrypt.hash(password, 10);
    await User.create({
      firstname,
      lastname,
      email,
      password: hashedPassword,
    });
    return res.redirect("/");
  }
}

// Show the form for editing the specified resource.
async function edit(req, res) {}

// Update the specified resource in storage.
async function update(req, res) {}

// Remove the specified resource from storage.
async function destroy(req, res) {}

// Otros handlers...
// ...

module.exports = {
  index,
  login,
  create,
  store,
  edit,
  update,
  destroy,
  logout,
};
