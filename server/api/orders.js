const router = require('express').Router()
const {Product, Category, Order} = require('../db/models')
module.exports = router

// POST /api/orders/
router.post('/', (req, res, next) => {
  const {orderObj, userId, shippingDetails} = req.body

  Order.createOrder(orderObj, userId, req.sessionID, shippingDetails);

  res.sendStatus(201);
})



// // POST /api/orders/
// router.post('/', (req, res, next) => {
//   const {productIds, userId, boxId, shippingDetails} = req.body

//   //shipping details should be an array structured as [address, city, state, email]
//   console.log('sending: productIds, userId, sessionId, boxId, shippingDetails-- ', productIds, userId, boxId, shippingDetails)

//   Order.createOrder(productIds, userId, req.sessionID, boxId, shippingDetails);
// })


