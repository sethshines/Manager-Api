var express = require('express');
var router = express.Router();

router.post('/', function(req, res, err){
  res.send('Register Put').status(200);
});

module.exports = router;
