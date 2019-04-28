const express = require('express');
const router = express.Router();

const Tickets = require('../models/ticketsModel');

router.use(express.json());

module.exports = router;
