const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router();

const Tickets = require('../models/ticketsModel');
const Users = require('../models/usersModel');

router.use(express.json());

router.get('/users', async (req, res) => {
  const users = await Users.getAllUsers();

  if(users){
    res.status(200).json(users);
  } else {
    res.status(404).json({msg: 'No users found'});
  }
});

router.post('/register', async (req, res) => {
  const newUser = req.body;

  newUser.password = bcrypt.hashSync(newUser.password, 12);

  const user = await Users.register(newUser);

  if(user){
    res.status(200).json({msg: 'User was created succesfully'});
  } else {
    res.status(500).json({msg: 'Unable to create user'});
  }
});

router.post('/login', (req, res) => {

});

module.exports = router;
