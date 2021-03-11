var express = require('express');
var router = express.Router();
var User = require('../models/user');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Users' });
});

router.get('/sign_in', (req, res) => {
  res.render('users/signin', {});
});

router.get('/email_sign_in', (req, res) => {
  res.render('users/email_signin', {});
});

router.get('/sign_up', (req, res) => {
  res.render('users/signup', {});
});

router.get('/email_sign_up', (req, res) => {
  res.render('users/email_signup', {});
});

router.post('/new', (req, res) => {
  
});


module.exports = router;
