/* global describe beforeEach it */

const {expect} = require('chai')
const db = require('../index')
const Product = db.model('product')

describe('Product model', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('setter and getter methods for price', () => {
    let glassProduct;

      beforeEach(() => {
        return Product.create({
          title: 'glass',
          price: 5.99
        })
          .then(() => {
            return Product.findOne({
              where: {
                title: 'glass'
              }
            })
          .then((product) => {
            glassProduct = product
          })
          })
      })

      it('sets and gets price in dollars and cents', () => {
        expect(glassProduct.price).to.equal(5.99)
      })

  })
})

