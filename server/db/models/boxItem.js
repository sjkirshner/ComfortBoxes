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
    defaultValue: 0
  }
})
//BoxItem table has 2 foreign keys: order_id and product_id, but is not referenced in other tables
module.exports = BoxItem

// When the same item is added to a box more than once, these items will count as one instance of that BoxItem, but productQuantityInBox and productPrice will both increase (if added using BoxItem methods below)

/**
 * instanceMethods
 */


/**
 * classMethods
 */

 //BoxItem.addProductsToBox is called by Order.addItemsToOrder and returns order that items were added to.
BoxItem.addProductsToBox = function (arrayOfProductIds, order, boxId) {
  arrayOfProductIds.forEach((productId) => {
    const promiseArray = [
      BoxItem.findOrCreate({
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

 //BoxItem.removeProductFromBox removes item from order and returns order that items were removed from.
BoxItem.removeProductFromBox = function (productId, order, boxId) {
  const promiseArray = [
    BoxItem.findOne({
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
      boxItem.productQuantityInBox -= 1;
      boxItem.productPrice -= product.price;
      boxItem.save();
    })
  return order;
}



/**
 * hooks
 */

