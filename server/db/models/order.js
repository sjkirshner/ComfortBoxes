const Sequelize = require('sequelize')
const db = require('../db')
const BoxItem = require('./boxItem')

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

 //Order.addItemsToOrder either creates a new order if none is passed in and then passes along order info to BoxItem.addProductsToBox(), or just passes along order info. When calling this method, get boxId argument from shopping cart session data. Order argument is optional-- only pass in if adding products to previously created order (order should've been returned by BoxItem.addProductsToBox() when last called Order.addItemsToOrder() ).
Order.addItemsToOrder = function (arrayOfProductIds, userId, sessionId, boxId, order) {
  if (!order){
    Order.create({
        user_id: userId,
        sessionId,
        status: 'created'
      })
      .then((newOrder) => {
        BoxItem.addProductsToBox(arrayOfProductIds, newOrder, boxId)
      })
  } else {
    BoxItem.addProductsToBox(arrayOfProductIds, order, boxId)
  }
}


/**
 * hooks
 */

