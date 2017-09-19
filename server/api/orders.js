const router = require('express').Router()
const {Product, Category, Order} = require('../db/models')
module.exports = router

// POST /api/orders/
router.post('/', (req, res, next) => {
  const {productIds, userId, sessionId, boxId, shippingDetails} = req.body
  //shipping details should be an array structured as [address, city, state, email]
  Order.createOrder(productIds, userId, sessionId, boxId, shippingDetails)
    // .then(item => {
    //   console.log('here\'s the item we\'re getting back:', item)
    //   res.sendStatus(201)
    // })
})

