var User = require('../models/').User;

module.exports.addUser = function(req,res,next){
	var user  = req.body;
	//console.log('add user:', user);
	var newUser = new User({
		'firstname': user.firstname,
		'lastname' : user.lastname,
		'email'    : user.email.toLowerCase(),
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

module.exports.findUser = function(email,next){
	User.findOne({'email': email.toLowerCase() } , function(error,user){
        next(error,user);
    }); //find user
};// find user
