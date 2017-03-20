var express = require('express');
var router  = express.Router();

router.get('/', function (req, res, next) {
  res.render('album/index', {});
});

module.exports = router;