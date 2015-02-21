var express = require('express');
var router = express.Router();
var packageJSON = require('../package.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET login page. */
router.get('/login', function(req, res, next) {
  res.render('login', { app_name: packageJSON.name });
});

module.exports = router;
