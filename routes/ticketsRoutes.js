const express = require('express');
const router = express.Router();

const Tickets = require('../models/ticketsModel');
const Users = require('../models/usersModel');

router.use(express.json());

//Get all tickets in queue
router.get('/tickets', async (req, res) => {
  const tickets = await Tickets.getAllTickets();

  res.status(200).json(tickets);
});

//Get ticket by id
router.get('/tickets/:id', async (req, res) => {
  const { id } = req.params;
  const ticket = await Tickets.getTicketByID(id);

  if(ticket){
    res.status(200).json(ticket);
  } else {
    res.status(404).json({msg: 'Ticket does not exsist'})
  }
});

//Get tickets assigned to x admin
router.get('/tickets/admin/:id', async (req, res) => {
  const { id } = req.params;
  const user = await Users.getUserByID(id);

  if(user && user.role === 'Admin'){
    if(user.assigned_user === id){
      const tickets = await Tickets.getTicketsAssignedToAdmin(id);
      res.status(200).json(tickets);
    } else {
      res.status(404).json({msg: 'This Admin has no tickets assigned'});
    }
  } else {
    res.status(404).json({msg: 'User does not exsist or is not an admin'});
  }
});

//Get tickets created by x student
router.get('/tickets/student/:id', async (req, res) => {
  const { id } = req.params;
  const user = await Users.getUserByID(id);
  console.log(user);

  if(user){
    const tickets = await Tickets.getTicketsCreatedByUser(id);
    console.log(tickets);
    if(tickets){
      res.status(200).json(tickets);
    } else {
      res.status(404).json({msg: 'This user has not created any tickets'});
    }
  } else {
    res.status(404).json({msg: 'User does not exsist'});
  }
});

//Create new ticket
router.post('/tickets', async (req, res) => {
  const { title, description, category, user_id } = req.body;

  if(title || description || category || user_id){
    const ticket = await Tickets.createTicket(req.body);
    res.status(201).json(ticket);
  } else {
    res.status(422).json({message: 'Missing Fields Required'});
  }
});

//Update existing ticket by id
router.put('/tickets/:id', async (req, res) => {
  const { id } = req.params;
  const updatedTicket = req.body;

  const ticket = await Tickets.getTicketByID(id);

  if(ticket){
    Tickets.updateTicket(id, updatedTicket)
           .then(ticket => {
             res.status(200).json(ticket);
           })
           .catch(err => {
             res.status(500).json(err);
           });
  } else {
    res.status(404).json({msg: 'Ticket does not exsist'});
  }

});

//Delete ticket by id
router.delete('/tickets/:id', async (req, res) => {
  const { id } = req.params;
  const ticket = await Tickets.getTicketByID(id);

  if(ticket){
    Tickets.deleteTicket(id)
           .then(count => {
             res.status(200).json(count);
           })
           .catch(err => {
             res.status(500).json(err);
           });
  } else {
    res.status(404).json({msg: 'Ticket does not exsist'});
  }

});

module.exports = router;
