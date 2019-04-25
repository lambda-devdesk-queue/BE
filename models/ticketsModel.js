const db = require('../data/dbConfig');

module.exports = {
  getAllTickets: () => {
    return db('tickets');
  }
}
