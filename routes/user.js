var express = require('express');
var router = express.Router();
var passport = require('passport');

var userCtrl = require('../controllers/user-controller.js');

//---------- User Login -----------------------------
router.get('/user/login', function(req,res,next){
	var viewData = {
			'title':'Login Page', 
			'navto':'login'
		};

	res.render('index', viewData);
});
//--------- Authenticate   ----------------------------
router.post('/user/login', passport.authenticate('local') , function(req,res,next){
	res.redirect('/items');
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
//------------ Add User -----------------------------
router.post('/user/register', function(req,res,next){
	return userCtrl.addUser(req,res,next); 
});
//-------- User Logout --------------------------------
router.get('/user/logout', function(req,res,next){
	req.logout();
	res.redirect('/');
});

module.exports = router;