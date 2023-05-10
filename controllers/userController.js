const { User } = require("../models");

// Display a listing of the resource.
async function index(req, res) {}

// Display the specified resource.
async function show(req, res) {}

// Show the form for creating a new resource
async function create(req, res) {}

// Store a newly created resource in storage.
async function store(req, res) {

  const { firstname, lastname, email, password } = req.body;
  console.log(firstname, lastname, email, password);
  const existingUser = await User.findOne({ where: {email} });

  if (existingUser) {
    return res.status(400).send("El correo electrónico ya está registrado");
  } else{

  await User.create({
    firstname,
    lastname,
    email,
    password,
  })
  res.redirect("/");
}};


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
  show,
  create,
  store,
  edit,
  update,
  destroy,
};
