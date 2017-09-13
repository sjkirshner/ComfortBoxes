const Sequelize = require('sequelize')
const db = require('../db')

const Order = db.define('order', {
  sessionId: {
    type: Sequelize.TEXT,
    validate: {
      min: 5
    }
  },
  status: {
    type: Sequelize.ENUM,
    values: ['created', 'processing', 'cancelled', 'completed']
  }
})
//Order table has 2 foreign keys: user_id and product_id, and is referenced in BoxItem table
module.exports = Order

/**
 * instanceMethods
 */




/**
 * classMethods
 */





/**
 * hooks
 */

