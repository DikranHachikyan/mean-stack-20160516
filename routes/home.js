var express = require('express');
var itemsCtrl = require('../controllers/items-controller.js');
var router = express.Router();

router.get('/', function(req,res,next){
	res.render('index', {title:'MuShop Web App'});
});//home page*/

module.exports = router;