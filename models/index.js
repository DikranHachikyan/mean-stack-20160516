var mongoose  = require('mongoose');
//var userCtrl  = require('../controllers/user-controller.js');

var Schema    = mongoose.Schema;


var titleValidator = [function(value){
        return (typeof value === 'string' && value.trim().length > 0 );
    }
    //Custom message
    , 'Title is required field'];

var itemSchema = new Schema({
		"_id":     {type: String,required: true},
        "category":{type: String,required: 'Category is required field' },
        "title":   {type: String,required: true, validate: titleValidator},
        "artist":  {type: String,required: false },
        "price":   {type: Number,required: true,min:[0.5, 'The priice must be bigger than 0.5']},
        "artwork": {type: String,required: false, default: 'default.png'},
        "description": {type: String,required: false}
});


var userSchema = new Schema({
	  'firstname': {type:String,required:true}
	, 'lastname':  {type:String,required:true}
	, 'email':     {type:String,required:true}
	, 'password':  {type:String,required:true}
	, 'createdon': {type:Date, required:false, default: Date.now} 
});

var schemaObj = {};

schemaObj.Item = mongoose.model('item', itemSchema );
var _User = schemaObj.User = mongoose.model('user', userSchema );

// --------------- Email validation ----------------------
userSchema.path('email').validate(function(value,next){
    _User.findOne({'email':value.toLowerCase() } , function(error,user){
        if(error)
        {
            return next(false);
        }
        next(!user);
    }); //find user
} , 'That email already in use!');
//------------------------------------------------------


module.exports = schemaObj;
