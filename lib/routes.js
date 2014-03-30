'use strict';

var dudes   = require('./controllers/dudes'),
    friends = require('./controllers/friends'),
    users = require('./controllers/users');

/**
 * Application routes
 */
module.exports = function(app) {

  // Server API Routes
  app.get('/users/:userId', users.get );
  app.post('/users/:userId', users.create );
  app.get('/users/:userId/dudes/:dudeId', dudes.getDude );
  app.get('/users/:userId/dudes', dudes.list );
  app.post('/users/:userId/dudes', dudes.recognize );
  app.post('/users/:userId/friends', friends.update );

};