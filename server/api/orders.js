const router = require('express').Router()
const {Product, Category, Order} = require('../db/models')
module.exports = router

// POST /api/orders/
router.post('/', (req, res, next) => {
  const {productIds, userId, sessionId, boxId, shippingDetails} = req.body

  //shipping details should be an array structured as [address, city, state, email]
  console.log('sending: productIds, userId, sessionId, boxId, shippingDetails-- ', productIds, userId, sessionId, boxId, shippingDetails)

  Order.createOrder(productIds, userId, sessionId, boxId, shippingDetails);
})

