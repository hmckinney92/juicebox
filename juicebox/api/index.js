const express = require('express');
const apiRouter = express.Router();
const apiRouter = require('./api');
server.use('/api', apiRouter);
const usersRouter = require('./users');
apiRouter.use('/users', usersRouter);
const { client } = require('./db');
client.connect();

server.listen(PORT, () => {
  // old stuff
});
module.exports = apiRouter;
