const express = require('express');
const tagsRouter = express.Router();
const morgan = require('morgan');
server.use(morgan('dev'));
const { getAllTags } = require('../db');


const { getAllTags} = require('../db');

// UPDATE
usersRouter.get('/', async (req, res) => {
  const users = await getAllPosts();

  res.send({
    posts
  });
});

module.exports = tagsRouter;