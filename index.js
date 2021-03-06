// inside index.js
require('dotenv').config();

// remove this once you confirm it works
console.log(process.env.JWT_SECRET);
// like, seriously. go delete that!

const PORT = 3000;
const express = require('express');
const server = express();

const bodyParser = require('body-parser');
server.use(bodyParser.json());

const morgan = require('morgan');
server.use(morgan('dev'));

const apiRouter = require('./api');
server.use('/api', apiRouter);

const { client } = require('./db');
client.connect();

server.listen(PORT, () => {
  console.log('The server is up on port', PORT)
});