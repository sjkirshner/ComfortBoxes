const router = require('express').Router()
const {Category, Product} = require('../db/models')
module.exports = router

// GET /api/categories/
// res.json array of category objects (that have arrays of product objects attached to each)
router.get('/', (req, res, next) => {
  console.log('Made it to Category GET')
  Category.findAll({
    include: [{all: true}]
    // [
    //   {model: Product}
    // ]
  }

    )
    .then(categories => {
      res.json(categories)
    })
    .catch((err) => console.error(err));
})

