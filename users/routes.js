var express = require('express');
var router = express.Router();
var User = require('./user');

// list of all users
router.get('/', function(req, res) {
  User.find({}, function(err, users) {
    res.json(users);
  });
});

// create user
router.post('/', function(req, res) {
  var name = req.param('name');
  var email = req.param('email');
  var newUser = new User({ name: name, email: email });
  newUser.save(function(err) {
    if (err) {
      res.status(500).json({
        message: err.message(),
        error: err
      });
    }
    res.json(newUser);
  });
});
module.exports = router;