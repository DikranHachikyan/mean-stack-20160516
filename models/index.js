var items = require('./items.js');

module.exports.getAllItems = function(){
	var query = items.find({});

	query.exec(function(err,result){
		console.log(result);
	})
};