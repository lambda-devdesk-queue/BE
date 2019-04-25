const router = require('express').Router();

const Tickets = require('../models/ticketsModel');


//Get all tickets in queue
router.get('/tickets', async (req, res) => {
  const tickets = await Tickets.getAllTickets();

  res.status(200).json(tickets);
});

module.exports = router;
