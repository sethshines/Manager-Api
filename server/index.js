var express = require('express');
var router = express.Router();

/* GET home page. */
router.use('/user', require('./features/user'));
router.use('/case', require('./features/case'));
router.use('/company', require('./features/company'));
router.use('/contact', require('./features/contact'));
router.use('/task', require('./features/task'));
router.use('/login', require('./features/login'));
router.use('/register', require('./features/register'));
module.exports = router;
