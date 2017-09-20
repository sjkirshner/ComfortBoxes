const router = require('express').Router()
module.exports = router

router.get('/', (req, res, next) => {
  const user = req.sessionID;
  res.json(req.sessionID)
})


router.post('/', (req, res, next) => {
  User.create(req.body)
  .then(user => res.json(user))
  .catch(next)
})





console.log('session Id: ', req.sessionID);
