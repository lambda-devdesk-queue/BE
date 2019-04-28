const db = require('../data/dbConfig');

module.exports = {

  getAllTickets: () => {
    return db('tickets');
  },

  getTicketByID: (id) => {
    return db('tickets').where({ id }).first();
  },

  getTicketsAssignedToAdmin: (assigned_user) => {
    return db('tickets').where({ assigned_user });
  },

  getTicketsCreatedByUser: (user_id) => {
    return db('tickets').where({ user_id });
  },

  createTicket: async (ticket) => {
    const [id] = await db('tickets').insert(ticket);
    return db('tickets').where({ id }).first();
  },

  updateTicket: (id, updatedTicket) => {
    return db('tickets').where({ id }).update(updatedTicket);
  },

  deleteTicket: (id) => {
    return db('tickets').where({ id }).del();
  }
}
