require('dotenv').config();
var request = require('superagent');
var express = require('express');
var router  = express.Router();

var Gyazo = require('gyazo-api');
var client = new Gyazo(process.env.GYAZO_ACCESS_TOKEN);

router.all('/*', (req, res, next) => {
  res.contentType('json');
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

// GET
router.get('/health', (req, res) => {
  res.send({status: 'OK'});
});


// POST
router.post('/album/gyazo_list', (req, res) => {
  console.info(req.body);
  client.list({page: 1, per_page: +req.body.per_page})
    .then(result => {
      res.send({
        status: 'OK',
        images: result.data
      });
    })
    .catch(err => {
      console.error(err);
      res.send({status: 'NG'});
    });
});


module.exports = router;