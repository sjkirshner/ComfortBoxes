const Sequelize = require('sequelize')
const db = require('../db')
const BoxItem = require('./boxItem')

const Order = db.define('order', {
  sessionId: {
    type: Sequelize.STRING
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

 //Order.createOrder creates a new order using info passed in from local storage cart and user info, and then passes along created order info to BoxItem.storeOrderedItems(). When calling this method, get boxId argument from shopping cart session data.
Order.createOrder = function (stringOfProductIds, userId, sessionId, boxId) {
  const productIdArray = stringOfProductIds.split(',')
    Order.create({
        user_id: userId,
        sessionId,
        status: 'created'
      })
      .then((newOrder) => {
        BoxItem.storeOrderedItems(productIdArray, newOrder, Number(boxId))
      })
}


/**
 * hooks
 */

