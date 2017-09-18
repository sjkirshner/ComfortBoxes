const router = require('express').Router()
const HttpError = require('./HttpError');
const {Product} = require('../db/models')
module.exports = router

//If product requrest is made with an id, check if product id matches to a valid product in DB
router.param('id', function (req, res, next, id) {
  Product.findById(id)
  .then(function (product) {
    if (!product) throw HttpError(404);
    req.product = product;
    next();
    return null;
  })
  .catch(next);
});

// GET /api/products/
// res.json array of products objects
router.get('/', (req, res, next) => {
  Product.findAll()
  .then(products => {
    res.json(products)
  })
  .catch((err) => console.error(err));
})

// GET /api/products/:id
router.get('/:id', (req, res, next) => {
  Product.findById(req.params.id)
  .then(product => {
    res.json(product)
  })
  .catch((err) => console.error(err));
})
