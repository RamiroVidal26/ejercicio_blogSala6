const express = require("express");
const router = express.Router();

async function validateComment(req, res, next)
{
    const articleId = req.params.id;
    const { name, content } = req.body;
    if (name === "" || content === "") 
    {
      res.send("Faltan campos por completar\n http://localhost:3000");
    }
    else
    {
      next()
    }
}

module.exports = {validateComment};
