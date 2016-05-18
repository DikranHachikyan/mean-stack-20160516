var express = require('express');
var router = express.Router();
var userCtrl = require('../controllers/user-controller.js');

//---------- User Login -----------------------------
router.get('/user/login', function(req,res,next){
	var viewData = {
			'title':'Login Page', 
			'navto':'login'
		};

	res.render('index', viewData);
});
//-------- User Registration --------------------------
router.get('/user/register', function(req,res,next){
	var viewData = {
			'title':'Registration Page', 
			'navto':'registration',
			'error': '',
			'input':{'firstname':'','lastname':'','email':''}
		};

	res.render('index', viewData);
});

router.post('/user/register', function(req,res,next){
	return userCtrl.addUser(req,res,next); 
});
//-------- User Logout --------------------------------
router.get('/user/logout', function(req,res,next){
	var viewData = {
			'title':'Registration Page'
		};

	res.render('index', viewData);
});

module.exports = router;