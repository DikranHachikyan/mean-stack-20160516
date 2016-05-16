var mongoose  = require('mongoose');
var Schema    = mongoose.Schema;

var itemsSchema = new Schema({
		"_id": {
			type: String, 
			required: true
		},
        "category":{
            type: String,
			required: true
        },
        "title": {
        	type: String,
			required: true
        },
        "artist": {
        	type: String,
			required: false
        },
        "price": {
        	type: Number,
			required: true
        },
        "artwork": {
        	type: String,
			required: false
        },
        "description": {
        	type: String,
			required: false
        }
});


module.exports = mongoose.model('items', itemsSchema );