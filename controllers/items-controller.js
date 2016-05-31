var Item = require('../models/').Item;


module.exports.getAllItems = function(req,res){
	var query = Item.find({});
	query.exec(function(err,result){
		res.json(result);
	})
};