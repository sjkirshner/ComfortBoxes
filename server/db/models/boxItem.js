const Sequelize = require('sequelize')
const db = require('../db')
const Product = require('./product')

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
BoxItem.prototype.addingProductInBox = function (productId) {
  this.productQuantityInBox += 1;
  this.productPrice = this.productPrice.bind(this)
  Product.findById(productId)
    .then((product) => {
      this.productPrice += product.price
    })
}



/**
 * classMethods
 */

BoxItem.addProductsToBox = function (orderId, boxId, arrayOfProductIds) {
  arrayOfProductIds.forEach((productId) => {
    BoxItem.findOrCreate({
      where: {
        order_id: orderId,
        boxId,
        product_id: productId
      }
    })
      .then((boxItem) => {
        boxItem.addingProductInBox(productId)
      })
  })// SARA: figure out proper way to update instance or call instance method. Can you do it on the return of findOrCreate object or do you need to frame it some other way?

}



/**
 * hooks
 */

