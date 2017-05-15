var express = require('express');
var bp = require('body-parser');
var mongoose = require('mongoose');

var app = express();

app.use(express.static(__dirname + '/static'));
app.use(express.static(__dirname + '/node_modules'));
app.use(express.static(__dirname + '/bower_components'));
app.use(bp.urlencoded({extended:true}));

app.set('views', __dirname + '/views');
app.set('view engine','ejs');

mongoose.connect('mongodb://localhost/dojo_redux');

mongoose.Promise = global.Promise;

var MongooseSchema = new mongoose.Schema({
	name: {
		'type': String,
		'default': "JJ",
		'minlength':[1,'Must have a name~!']
	},
	color: {
		'type': String,
		'default': "Black",
		'minlength':[1,'Must have a name~!']
	},
	weight: {
		'type': Number,
		'default': 10,
		'min':[0,'Must have a positive number!']	
	}
})

mongoose.model('Mongoose', MongooseSchema);

var Mongoose = mongoose.model('Mongoose')

app.get('/',function(req,res){
	Mongoose.find({}).exec(function(err,mongooses){
		if(err){
			return res.send(err);
		}
		return res.render('index',{'mongooses':mongooses})
	});
})

app.post('/',function(req,res){
	Mongoose.create(req.body,function(err,result){
		if(err){console.log(err);
		}
		return res.redirct('/')
	});
});


app.get('/new',function(req,res){
	return res.render('new');
});

app.get('/:id',function(req,res){
	Mongoose.find({_id: req.params.id},function(err,response){
		if(err){
			console.log(err);
		}
		return res.render('info',{mongoose: response[0] });
	});
});


app.get('/:id/edit/',function(req,res){
	Mongoose.find({_id: req.params.id},function(err,response){
		if(err){
			console.log(err);
		}
		return res.render('edit',{mongoose:response[0]});
	});
});

app.post('/:id',function(req,res){
	Mongoose.update({_id: req.params.id},req.body,function(err,res){
		if(err){
			console.log(err);
		}
		return res.redirect('/');
	})
});

app.post('/:id/delete',function(req,res){
	Mongoose.remove({_id: req.params.id},function(err,res){
		if(err){
			console.log(err);
		}
		return res.redirect('/');
	})
});

app.listen(8000, function(){
	console.log('listening on port 8000...');
})




















