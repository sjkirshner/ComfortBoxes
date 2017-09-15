/* global describe beforeEach it */

const {expect} = require('chai');
const db = require('../index');
const Category = db.model('category');
const Product = db.model('product');

describe.only('Category model', () => {

  beforeEach(() => {
    return db.sync({force: true})
    .then(() => {
      const categoryPromise = Category.create({ title: 'hey' });
      const productPromise = Product.create({title: 'heyProduct'});

      return Promise.all([categoryPromise, productPromise])
      .then(([categoryItem, productItem]) => {
        return categoryItem.addProduct(productItem);
      })
    })
  });


  it('has product default scope', () => {
    return Category.findOne({ where: { title: 'hey' }})
    .then( myCategory => {
      expect(myCategory.dataValues.products[0].title).to.equal('heyProduct');

    })
  })
})
