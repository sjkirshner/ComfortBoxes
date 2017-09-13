const Sequelize = require('sequelize')
const db = require('../db')

const Product = db.define('product', {
  title: {
    type: Sequelize.STRING
  },
  price: {
    type: Sequelize.INTEGER
  },
  description: {
    type: Sequelize.TEXT
  },
  img: {
    type: Sequelize.STRING,
    defaultValue: 'http://www.thecellartrust.org/wp-content/uploads/2016/04/Product-Image-Coming-Soon.png',
    validate: {
      isUrl: true
    }
  },
  inventoryQuantity: {
    type: Sequelize.INTEGER
  },
  Available: {
    type: Sequelize.BOOLEAN,
    defaultValue: true
  },
})
//Product table has no foreign keys, but can be referenced in Product_Category, Review, and BoxItem tables
module.exports = Product

/**
 * instanceMethods
 */




/**
 * classMethods
 */





/**
 * hooks
 */

