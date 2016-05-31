module.exports = function(req,res,next){

	if( ! req.isAuthenticated() )
	{
		return res.redirect('/user/login');
	}
	next();
}