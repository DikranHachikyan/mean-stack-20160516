var db = require('../models/');



module.exports.getAllItems = function(req,res){
	var query = db.items.find({});

	query.exec(function(err,result){
		res.render('index', {title:'List of Items', items: result});
	})
};