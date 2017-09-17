const Sequelize = require('sequelize')
const db = require('../db')
const Product = require('./product')
const Order = require('./order')

//BoxItem lists the items that have been ordered and categorizes them by their respective boxes.

const BoxItem = db.define('boxItem', {
  boxId: {
    type: Sequelize.INTEGER
  },
  productPrice: {
    type: Sequelize.INTEGER,
    defaultValue: 0.00
  },
  productQuantityInBox: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
    validate: {
      min: 0
    }
  }
})
//BoxItem table has 2 foreign keys: order_id and product_id, but is not referenced in other tables
module.exports = BoxItem



/**
 * instanceMethods
 */


/**
 * classMethods
 */





// // When the same item is added to a box more than once, these items will count as one instance of that BoxItem, but productQuantityInBox and productPrice will both increase (if added using BoxItem method below)

 //BoxItem.storeOrderedItems is called by Order.createOrder and returns order that items are associated with.
BoxItem.storeOrderedItems = function (arrayOfProductIds, order, boxId) {
  arrayOfProductIds.forEach((productId) => {
    const promiseArray = [
      BoxItem.create({
        where: {
          order_id: order.id,
          boxId,
          product_id: productId
        }
      }),
      Product.findById(productId)
    ]
    Promise.all(promiseArray)
      .spread((boxItem, product) => {
        boxItem.productQuantityInBox += 1;
        boxItem.productPrice += product.price;
        boxItem.save();
      })
  })
  return order;
}

//NOTE: I DELETED REMOVE PRODUCTS METHOD AND CHANGED store Ordered Items METHOD BECAUSE I realized that we won't use this functionality since we're not going to allow users to change their orders, only their shopping carts (so they can't add or remove items from order, they can only add or remove items from localStorage shopping cart BEFORE they order). We can retreive the older methods from prev git versions if need be, but I don't want them confusing us in the codebase.

/**
 * hooks
 */

