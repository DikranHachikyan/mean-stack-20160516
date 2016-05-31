var express = require('express');
var mongoose = require('mongoose');
var ejs  = require('ejs');
var config = require('./config/');
var multer = require('multer');
var expressSession = require('express-session');

var connectMongo = require('connect-mongo');
var MongoStore   = connectMongo(expressSession);

var router = require('./routes/');

var app = express();

var passport = require('passport');
var passportConfig = require('./auth/passport-config.js');

passportConfig();

mongoose.connect(config.MONGO_URI);


app.engine('html', ejs.renderFile );
app.set('view engine', 'html');
app.set('views', './views');


app.use(multer().array());
// Botstrap files
app.use('/css', express.static( __dirname + '/node_modules/bootstrap/dist/css/'));
app.use('/fonts', express.static( __dirname + '/node_modules/bootstrap/dist/fonts/'));
app.use('/js', express.static( __dirname + '/node_modules/bootstrap/dist/js/'));

// jQuery
app.use('/js', express.static( __dirname + '/node_modules/jquery/dist/'));

//Other Static Resourses
app.use('/css', express.static( __dirname + '/public/css/'));
app.use('/js', express.static( __dirname + '/public/js/'));
// --- images ---
app.use('/images', express.static( __dirname + '/public/images/'));
app.use('/images', express.static( __dirname + '/public/images/covers/'));
//-------------------------------------------------------------------------

app.use(expressSession({
	secret: 'cat Beer',
	saveUninitialized: false,
	resave: true,
	store : new MongoStore({
		mongooseConnection:mongoose.connection
	})
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(router.index);
app.use(router.user);

//app.use( require('./auth/restrict-access.js'));
//app.use(router.index);
app.use(router.items);

var server = app.listen(3000, function(){
    console.log('Listen on port ' + this.address().port + '...');
});//create and start server then listen port 3000