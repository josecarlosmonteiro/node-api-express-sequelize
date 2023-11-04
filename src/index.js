const express = require('express');
const router = require('./router');

const server = express();

const PORT = process.env.PORT || 3000;

server.use('/', router);

server.listen(PORT, () => {
  console.log('Server running in http://localhost:' + PORT);
});