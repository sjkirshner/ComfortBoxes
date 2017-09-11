
const db = require('../_db.js');
const Sequelize = require('sequelize');
const Kitten = require('./Kitten');
const Puppy = require('./Puppy');
const User = require('./User');

Puppy.belongsTo(User, {as: 'owner'});
User.hasMany(Puppy);
Kitten.belongsTo(User, {as: 'owner'});
User.hasOne(Kitten);

module.exports = db;
