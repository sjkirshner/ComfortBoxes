
const db = require('../_db.js');
const Sequelize = require('sequelize');

const User = db.define('user', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
}
})

module.exports = User;
