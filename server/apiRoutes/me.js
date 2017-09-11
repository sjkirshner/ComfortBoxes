// apiRoutes/me.js
const router = require('express').Router();
const User = require('../models/User');

//LOGIN
router.post('/login', (req, res, next) => {
  User.findOne({
    where: {
      email: req.body.email
    }
  })
    .then(user => {
      if (!user) {
        res.status(401).send('User not found');
      } else if (!user.correctPassword(req.body.password)){
        res.status(401).send('Incorrect password');
      } else {
        req.login(user, err => {
          if (err) next(err);
          else res.json(user);
        });
      }
    })
    .catch(next);
});


//LOGOUT
router.post('/logout', (req, res, next) => {
  req.logout();
  res.sendStatus(200);
});

//SIGN UP
router.post('/signup', (req, res, next) => {
  User.create(req.body)
    .then(user => {
      req.login(user, err => {
        if (err) next(err);
        else res.json(user);
      });
    })
    .catch(next);
});


//Get me
router.get('/', (req, res, next) => {
  res.json(req.user);
});

module.exports = router;
