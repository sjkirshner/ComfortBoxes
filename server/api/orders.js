const router = require('express').Router()
const {Product, Category, Order} = require('../db/models')
module.exports = router

// GET /api/orders/
router.get('/', (req, res, next) => {
  Order.findAll()
  .then(categories => {
    res.json(categories)
  })
  .catch((err) => console.error(err));
})

// POST /api/orders/
router.post('/', (req, res, next) => {
  const {productIds, userId, boxId, shippingDetails} = req.body

  //shipping details should be an array structured as [address, city, state, email]
  console.log('sending: productIds, userId, sessionId, boxId, shippingDetails-- ', productIds, userId, boxId, shippingDetails)

  Order.createOrder(productIds, userId, req.sessionID, boxId, shippingDetails);
})

