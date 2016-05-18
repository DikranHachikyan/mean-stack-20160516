var express = require('express');
var itemsCtrl = require('../controllers/items-controller.js');
var router = express.Router();

router.get('/items', function(req,res,next){
	return itemsCtrl.getAllItems(req,res)
});//home page*/

module.exports = router;