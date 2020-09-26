const express = require('express');
const tagRouter = express.Router();

tagRouter.use((req, res, next) => {
  console.log("A request is being made to /users");

  next(); // THIS IS DIFFERENT
});

const { getAllTags } = require('../db');
const { getPostsByTagName } = require('../db');

// UPDATE
tagRouter.get('/', async (req, res) => {
  const tags = await getAllTags();

  res.send({
    tags
  });
});

tagRouter.get('/:tagName/posts', async (req, res, next) => {
  // read the tagname from the params
  const {tagName} = req.params
  const newTagName = tagName.replace('%23', '#')

  try {
    const searchPost = await getPostsByTagName(newTagName);

    res.send({
      post: searchPost
    });
    // use our method to get posts by tag name from the db
    // send out an object to the client { posts: // the posts }
  } catch ({ name, message }) {
    next({name, message})
    // forward the name and message to the error handler
  }
});

module.exports = tagRouter;