const express = require('express');
const router = express.Router();

const Tickets = require('../models/ticketsModel');

router.use(express.json());

//Get all tickets in queue
router.get('/tickets', async (req, res) => {
  const tickets = await Tickets.getAllTickets();

  res.status(200).json(tickets);
});

router.post('/tickets', async (req, res) => {
  const { title, description, category, user_id } = req.body;

  if(title || description || category || user_id){
    const ticket = await Tickets.createTicket(req.body);
    res.status(201).json(ticket);
  } else {
    res.status(422).json({message: 'Missing Fields Required'});
  }
});

router.put('/tickets/:id', (req, res) => {
  const { id } = req.params;
  const updatedTicket = req.body;

  Tickets.updateTicket(id, updatedTicket)
         .then(ticket => {
           res.status(200).json(ticket);
         })
         .catch(err => {
           res.status(500).json(err);
         });
});

router.delete('/tickets/:id', async (req, res) => {
  const { id } = req.params;

  Tickets.deleteTicket(id)
         .then(count => {
           res.status(200).json(count);
         })
         .catch(err => {
           res.status(500).json(err);
         });
});

module.exports = router;
