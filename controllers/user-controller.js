var User = require('../models/').User;

module.exports.addUser = function(req,res,next){
	var user  = req.body;
	
	var newUser = new User({
		'firstname': user.firstname,
		'lastname' : user.lastname,
		'email'    : user.email,
		'password' : user.password
	});

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

		res.redirect('/items');
	});
};