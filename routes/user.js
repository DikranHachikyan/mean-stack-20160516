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
router.post('/user/login', 
	function(req,res,next){
		console.log(req.body);
		if( req.body.remember)
		{
			//30 - days
			//24 - hours
			//3600 - sec
			//1000 - ms
			req.session.cookie.maxAge = 30 * 24 * 3600 * 1000; //ms
		}
		console.log('Post Login'); 
		next();
	}
	,
	passport.authenticate('local',{
		failureRedirect: '/',
		successRedirect:'/items'
	}));
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
	req.session.destroy();
	res.redirect('/');
});

module.exports = router;