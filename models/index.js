var mongoose  = require('mongoose');
var Schema    = mongoose.Schema;


var titleValidator = [function(value){
        return (typeof value === 'string' && value.trim().length > 0 );
    }
    //Custom message
    , 'Title is required field'];
var itemsSchema = new Schema({
		"_id": {
			type: String, 
			required: true
		},
        "category":{
            type: String,
			required: 'Category is required field'
        },
        "title": {
        	type: String,
			required: true,
            validate: titleValidator
        },
        "artist": {
        	type: String,
			required: false
        },
        "price": {
        	type: Number,
			required: true,
            min:[0.5, 'The priice must be bigger than 0.5']
        },
        "artwork": {
        	type: String,
			required: false,
            default: 'default.png'
        },
        "description": {
        	type: String,
			required: false
        }
});


var usersSchema = new Schema({
	  '_id': 	   {type:Schema.Types.ObjectId, required:true}
	, 'firstname': {type:String,required:true}
	, 'lastname':  {type:String,required:true}
	, 'email':     {type:String,required:true}
	, 'password':  {type:String,required:true}
	, 'createdon': {type:Date, required:false, default: Date.now} 
});
module.exports.items = mongoose.model('items', itemsSchema );
module.exports.users = mongoose.model('users', usersSchema );