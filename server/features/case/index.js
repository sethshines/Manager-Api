var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, err){
  res.send('Case Get').status(200);
});
router.put('/', function(req, res, err){
  res.send('Case Put').status(200);
});
router.delete('/', function(req, res, err){
  res.send('Case Delete').status(200);
});

module.exports = router;
