const router = require('express').Router()
const {User} = require('../db/models')
module.exports = router

router.get('/', (req, res, next) => {
  User.findAll({
    // explicitly select only the id and email fields - even though
    // users' passwords are encrypted, it won't help if we just
    // send everything to anyone who asks!
    attributes: ['id', 'email', 'isAdmin']
  })
    .then(users => res.json(users))
    .catch(next)
})

router.post('/', (req, res, next) => {
  User.create(req.body)
  .then(user => res.json(user))
  .catch(next)
})

router.put('/:id', (req, res, next) => {
  User.findById(req.params.id)
  .then(user => {
    return user.update({
        isAdmin: !user.isAdmin
      }, {
        fields: ['isAdmin']
      }
    )
  })
	.then( res.json.bind(res) )
	.catch(next);
})

router.delete('/:id', (req, res, next) => {
  User.destroy({
    where: { id: req.params.id }
  })
  .then(res.json.bind(res))
  .catch(next);
})
