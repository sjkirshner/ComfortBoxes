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
  },
  address: {
    type: Sequelize.STRING
  },
  city: {
    type: Sequelize.STRING
  },
  state: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING,
    validate: {
      isEmail: true
    }
  }
})

//NOTE that default CreatedAt is order date/time (display in order info for Admins' Orders page and User's past orders page)

//Order table has 2 foreign keys: user_id and product_id, and is referenced in BoxItem table
module.exports = Order

/**
 * instanceMethods
 */




/**
 * classMethods
 */

 //Order.createOrder creates a new order using info passed in from local storage cart and user info, and then passes along created order info to BoxItem.storeOrderedItems(). When calling this method, get boxId argument from shopping cart session data. Shipping details should be an array structured as [address, city, state, email].
Order.createOrder = function (productIds, userId, sessionId, boxId, shippingDetails) {
  const [address, city, state, email] = shippingDetails;
  console.log('getting in order model: address, city, state, email--- ', address, city, state, email)
    Order.create({
        user_id: userId,
        sessionId,
        status: 'created',
        address,
        city,
        state,
        email
      })
      .then((newOrder) => {
        BoxItem.storeOrderedItems(productIds, newOrder, Number(boxId))
      })
}


/**
 * hooks
 */

