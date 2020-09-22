const express = require('express');
const postRouter = express.Router();

postRouter.use((req, res, next) => {
  console.log("A request is being made to /users");

  next(); // THIS IS DIFFERENT
});

const { getAllPosts } = require('../db');

// UPDATE
postRouter.get('/', async (req, res) => {
  const posts = await getAllPosts();

  res.send({
    posts
  });
});

module.exports = postRouter;