const express = require('express');
const usersRouter = express.Router();
const morgan = require('morgan');
server.use(morgan('dev'));
const { getAllUsers } = require('../db');

server.use(express.json())
usersRouter.use((req, res, next) => {
  console.log("A request is being made to /users");

  next();
});
usersRouter.get('/', async (req, res) => {
  const users = await getAllUsers();
  res.send({
    users
  });
});


module.exports = usersRouter;