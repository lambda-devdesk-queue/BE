const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const ticketRoutes = require('../routes/ticketsRoutes');
const authRoutes = require('../routes/authRoutes');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/', ticketRoutes);
server.use('/api/', authRoutes);

server.get('/api/', async (req, res) => {
  res.status(200).json({ api: 'up' });
});

module.exports = server
