module.exports = function(){
	var passport = require('passport');
	var passportLocal = require('passport-local');
    var userCtrl = require('../controllers/user-controller.js');

    //-----------------------------------------------------------------
	passport.use( new passportLocal.Strategy({usernameField:'email'}, 
					function(email,password,next){
						userCtrl.findUser(email, function(error,user){
							//error
							if(error)
							{
								console.log('passport user:', error);
								return next(error);
							}
							//user does not exist || password is incorrect
							if( !user || user.password !== password)
							{
								return next(null,null);
							}
							//Ok!
							next(null, user);
						});//find user	
	}));//passport use
	//------------------------------------------------------------------

	passport.serializeUser(function(user,next){
		next(null, user.email);
	});

	passport.deserializeUser(function(email, next){
		userCtrl.findUser(email, function(error,user){
			next(error,user);
		});
	});
	
};// end