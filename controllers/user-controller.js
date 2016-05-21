var bcrypt = require('bcrypt');
var User = require('../models/').User;
var config = require('../config/');

module.exports.addUser = function(req,res,next){
	var user  = req.body;
	
	bcrypt.hash(user.password, config.SALT , function(error,hash){
		if(error){
			return next(error);
		}//if error

		var newUser = new User({
				'firstname': user.firstname,
				'lastname' : user.lastname,
				'email'    : user.email.toLowerCase(),
				'password' : hash
			}); //new user

		newUser.save( function(error){

			if(error)
			{
				console.log('add user error:',error);
				var viewData = {
						'title': 'User Registration',
						'input': user,
						'error': error,
						'navto': 'registration'
					};
					delete req.body.password;
				return res.render('index', viewData);
			}// if error

			res.redirect('/user/login');	
		});//newUser.save
	});// bcrypt hash;
};

module.exports.findUser = function(email,next){
	User.findOne({'email': email.toLowerCase() } , function(error,user){
        next(error,user);
    }); //find user
};// find user
