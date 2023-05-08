const formidable = require("formidable");
const { format } = require('date-fns');
const { Article, Comment } = require("../models");

// Display a listing of the resource.
async function index(req, res) {}

// Display the specified resource.
async function show(req, res) {
  const id = req.params.id;
  const article = await Article.findByPk(id, {include: ["user", "comments"]});
  const comments = article.comments.sort((a, b) => b.createdAt - a.createdAt);//investigar
  
 /* const comments = await Comment.findAll({
    where: {
      articleId: id,
    },
  });*/
  res.render("articlePage", { article, comments, format});
}

// Show the form for creating a new resource
async function create(req, res) {
  res.render("create");
}

// Store a newly created resource in storage.
async function store(req, res) {
  const form = formidable({
    multiples: true,
    uploadDir: __dirname + "/../public/img",
    keepExtensions: true,
    });

    form.parse(req, async (err, fields, files) => {
    const { title, content, userId } = fields;
    const image = files.image.newFilename;
    await Article.create({
      title,
      content,
      userId,
      image,
    });
    res.redirect("/panel");
    });
}

// Show the form for editing the specified resource.
async function edit(req, res) {
  const id = req.params.id;
  const article = await Article.findByPk(id);
  res.render("edit", { article });
}

// Update the specified resource in storage.
async function update(req, res) {
  const id = req.params.id
  const form = formidable({
    multiples: true,
    uploadDir: __dirname + "/../public/img",
    keepExtensions: true,
    });

    form.parse(req, async (err, fields, files) => {
    const { title, content} = fields;
    const image = files.image.newFilename;
    await Article.update({
      title,
      content,
      image
    },{
      where: {
        id: id,
      },
    },);
    res.redirect("/panel");
    });
  /*const id = req.params.id;
  const { title, content } = req.body;
  await Article.update(
    { title, content },
    {
      where: {
        id: id,
      },
    },
  );
  res.redirect("/panel");*/
}

// Remove the specified resource from storage.
async function destroy(req, res) {
  const id = req.params.id;
  await Article.destroy({
    where: {
      id: id,
    },
  });
  res.redirect("/panel");
}

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
