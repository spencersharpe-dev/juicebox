const express = require('express');
const tagRouter = express.Router();

tagRouter.use((req, res, next) => {
  console.log("A request is being made to /users");

  next(); // THIS IS DIFFERENT
});

const { getAllTags } = require('../db');

// UPDATE
tagRouter.get('/', async (req, res) => {
  const tags = await getAllTags();

  res.send({
    tags
  });
});

module.exports = tagRouter;