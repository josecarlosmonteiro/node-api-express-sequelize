const express = require('express');
const router = require('./router');

require('./database/dbConnect');

const server = express();

const PORT = process.env.PORT || 3000;

server.use('/', router);
server.use(express.json());
server.use(express.urlencoded({ extended: false }));

server.listen(PORT, () => {
  console.log('Server running in http://localhost:' + PORT);
});