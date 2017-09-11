//heyyy

const db = require('../_db.js');
const Sequelize = require('sequelize');

const Kitten = db.define('kitten', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
    }
})

module.exports = Kitten;
