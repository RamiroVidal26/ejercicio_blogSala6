const { Comment } = require("../models");

async function storeComment(req, res) {
  const articleId = req.params.id;
  const { name, content } = req.body;
  
  await Comment.create({
    name,
    content,
    articleId,
  });
  res.redirect(`/articulos/${articleId}`);
}

module.exports = { storeComment };
