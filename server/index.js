const express = require('express');
const app = express();
const path = require('path')
const bodyParser = require('body-parser');
const db = require('./_db.js');

const morgan = require('morgan');
app.use(morgan('dev'));


app.use(express.static(path.join(__dirname, '../public')));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require('../secrets')
const session = require('express-session');

// configure and create our database store
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const dbStore = new SequelizeStore({ db: db });

// sync so that our session table gets created
dbStore.sync();

// plug the store into our session middleware
app.use(session({
  secret: process.env.SESSION_SECRET,
  store: dbStore,
  resave: false,
  saveUninitialized: false
}));


app.use('/api', require('./apiRoutes')); // matches all requests to /api

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../index.html'));
})


app.use(function (err, req, res, next) {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error.');
});


db.sync({force: true})  // sync our database
  .then(function(){
    console.log('Everything but the kitchen sync!')
    const port = process.env.PORT || 3000; // this can be very useful if you deploy to Heroku!
    app.listen(port, function () {
      console.log("Knock, knock");
      console.log("Who's there?");
      console.log(`Your server, listening on port ${port}`);
    });
  })


