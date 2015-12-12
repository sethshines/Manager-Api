var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, err){
  res.send('Contact Get').status(200);
});
router.put('/', function(req, res, err){
  res.send('Contact Put').status(200);
});
router.delete('/', function(req, res, err){
  res.send('Contact Delete').status(200);
});

module.exports = router;
