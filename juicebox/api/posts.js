const express = require('express');
const postsRouter = express.Router();
const morgan = require('morgan');
server.use(morgan('dev'));
const { getAllPosts } = require('../db');


const { getAllPosts } = require('../db');

// UPDATE
usersRouter.get('/', async (req, res) => {
  const users = await getAllPosts();

  res.send({
    posts
  });
});


module.exports = postsRouter;
