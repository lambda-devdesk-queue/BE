const db = require('../data/dbConfig');

module.exports = {

  getUserByID: (id) => {
    return db('users').where({ id }).first();
  }
}
