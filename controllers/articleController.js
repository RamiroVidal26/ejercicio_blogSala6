const { render } = require("ejs");
const { Article } = require("../models");

// Display a listing of the resource.
async function index(req, res) {}

// Display the specified resource.
async function show(req, res) {
  const id = req.params.id;
  res.send(`Estoy entrando al articulo con id ${id}`);
}

// Show the form for creating a new resource
async function create(req, res) {
  res.render("create");
}

// Store a newly created resource in storage.
async function store(req, res) {
  const { title, content, userId } = req.body;
  await Article.create({
    title,
    content,
    userId,
  });
  res.redirect("/panel");
}

// Show the form for editing the specified resource.
async function edit(req, res) {
  const id = req.params.id;
  const article = await Article.findByPk(id);
  res.render("edit", { article });
}

// Update the specified resource in storage.
async function update(req, res) {
  const id = req.params.id;
  const { title, content } = req.body;
  await Article.update(
    { title, content },
    {
      where: {
        id: id,
      },
    },
  );
  res.redirect("/panel");
}

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
