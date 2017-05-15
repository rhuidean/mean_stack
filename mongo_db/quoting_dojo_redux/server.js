var express = require('express');
var bp = require('body-parser');
var mongoose = require('mongoose');

var app = express()

app.use(express.static(__dirname + '/static'));
app.use(express.static(__dirname + '/node_modules'));
app.use(express.static(__dirname + '/bower_components'));
app.use(bp.urlencoded({extended:true}));

app.set('views', __dirname + '/views');
app.set('view engine','ejs');

mongoose.connect('mongodb://localhost/dojo_redux');

mongoose.Promise = global.Promise;

var UserSchema = new mongoose.Schema({
	name:{
		'type': String,
		'default': "John Doe",
		'minlength': [4,'Your name is too short, XXXX XXX'],
	},
	quote: {
		'type': String,
		'default': "I make name jokes",
		'minlength': [4,'Your got to better than that.']
	}

}, {timestamps: true})


mongoose.model('User', UserSchema);

var User = mongoose.model('User')

app.get('/',function(req,res){
	return res.render('index');
})

app.post('/users', function(req,res){
	console.log(req.body);

	var user = new User(req.body);
	console.log(user);
	user.save(function(err, user){
		if(err){
			return res.send(err);
		}
		return res.redirect('/quotes');
	})	
})



app.get('/quotes', function(req,res) {
	User.find({}).exec(function(err, users){
		if(err){
			return res.send(err);
		}
		return res.render('users', {'users': users})
	});
})

app.listen(6789, function(){
	console.log('listening on port 6789...');
})