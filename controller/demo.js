var express = require('express');
var router  = express.Router();

router.get('/', function (req, res, next) {
  res.render('demo/index2', {});
});

router.get('/app', function (req, res, next) {
  res.render('demo/index3', {
    title: 'Express, React'
  });
});

router.get('/datastore', function (req, res, next) {
  res.render('demo/datastore', {});
});

module.exports = router;