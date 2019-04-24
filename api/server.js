const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.get('/api/', async (req, res) => {
  res.status(200).json({ api: 'up' });
});

module.exports = server
