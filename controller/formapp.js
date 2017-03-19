var express = require('express');
var router  = express.Router();

router.get('/', function (req, res, next) {
  res.render('apps/index', {title: 'Form App Demo'});
});

module.exports = router;