var Item = require('../models/').Item;


module.exports.getAllItems = function(req,res){
	var query = Item.find({});
	var user = '';
	if( req.user)
	{
		user = req.user;
	}
	query.exec(function(err,result){
		res.render('index', {title:'List of Items', 'items': result, 'firstname': user.firstname});
	})
};