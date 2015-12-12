var express = require('express');
var router = express.Router();

router.post('/', function(req, res, err){
  res.send('Login post').status(200);
});

module.exports = router;
