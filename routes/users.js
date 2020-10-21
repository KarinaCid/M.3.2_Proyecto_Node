var express = require('express');
var userController = require('../controllers/users');
var router = express.Router();

/* GET users listing. 
router.get('/', async function(req, res, next) {
  var result = await userController.user_get(req, res, next);
  res.render('users', { result });
});*/

/* Post user  */
router.post('/', function(req, res, next) { 
  userController.user_create(req, res, next);
});
module.exports = router;