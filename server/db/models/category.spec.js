/* global describe beforeEach it */

const {expect} = require('chai');
const db = require('../index');
const Category = db.model('category');
const Product = db.model('product');

describe('Category model', () => {

  let myCategory;

  beforeEach(() => {
    return db.sync({force: true})
    .then(() => {
      const categoryPromise = Category.create({ title: 'hey' });
      const productPromise = Product.create({title: 'heyProduct'});
      return Promise.all([categoryPromise, productPromise])
      .then(([categoryItem, productItem]) => {
        categoryItem.addProduct(productItem);
        productItem.addCategory(categoryItem);
        myCategory = categoryItem;
      })
    })
  });


  it.only('has product scope', () => {
    console.log(myCategory)
    expect(myCategory.dataValues.title).to.equal('hey');
  })
})
