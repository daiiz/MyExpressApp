var express = require('express');
var router  = express.Router();

// https://googlecloudplatform.github.io/google-cloud-node/#/docs/datastore/0.7.1/datastore
var datastore = require('@google-cloud/datastore')({
  projectId: 'daiz-projects',
  keyFilename: './goog-daiz-projects.json'
});

router.get('/', function (req, res, next) {
  res.render('demo/index2', {});
});

router.get('/demo', function (req, res, next) {
  var query = datastore.createQuery('Book');
  query.limit(10);
  datastore.runQuery(query, function(err, entities) {
    res.render('demo/index3', {
      title: 'Express, React, Datastore',
      books: entities
    });
  });
});

router.get('/datastore', function (req, res, next) {
  res.render('demo/datastore', {});
});

module.exports = router;