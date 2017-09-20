const router = require('express').Router()
const {Product, Category, Order} = require('../db/models')
module.exports = router

// POST /api/orders/
router.post('/', (req, res, next) => {
  const {orderObj, userId, shippingDetails} = req.body

  Order.createOrder(orderObj, userId, req.sessionID, shippingDetails);

  res.sendStatus(201);
})

