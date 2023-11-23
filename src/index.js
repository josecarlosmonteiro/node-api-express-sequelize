const express = require('express');
const router = require('./router');

require('dotenv').config();

require('./database/dbConnect');
require('./models');

const server = express();

const PORT = process.env.PORT || 3000;

server.use(express.json());
server.use(express.urlencoded({ extended: false }));

server.use('/', router);

server.listen(PORT, () => {
  console.log('Server running in http://localhost:' + PORT);
});