var express = require('express');
var itemsCtrl = require('../controllers/items-controller.js');
var router = express.Router();

router.get('/items', function(req,res,next){
	console.log('items get request');
	var user = '';
	if( req.user)
	{
		user = req.user;
	}
	res.render('index', { 
						'title':'List of Items', 
						'firstname': user.firstname,
						'navto':'items'
	});
	//return itemsCtrl.getAllItems(req,res);
});//home page*/

router.get('/items/api', function(req,res,next){
	console.log('api items get request');
	return itemsCtrl.getAllItems(req,res);
});//home page*/

module.exports = router;