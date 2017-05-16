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

mongoose.connect('mongodb://localhost/message_board');

mongoose.Promise = global.Promise;

var MessageSchema = new mongoose.Schema({
	name: {
		'type': String,
		'default': "JJ",
		'minlength':[1,'Must have a name~!']
	},
	message: {
		'type': String,
		'default': "I am your father!",
		'minlength':[4,'Must be longer']
	},
	comments: [{
		'type': mongoose.Schema.Types.ObjectId,
		'ref': 'Comment'
	}]
});


mongoose.model('Message', MessageSchema);

var Message = mongoose.model('Message')

var CommentSchema = new mongoose.Schema({
	name: {
		'type': String,
	},
	'comment': {
		'type': String,
	},
	'_message': {
		'type': mongoose.Schema.Types.ObjectId,
		'ref': 'Message'
	}
})

mongoose.model('Comment',CommentSchema)
var Comment = mongoose.model('Comment')

app.get("/",function(req,res){
	Message.find({}).populate('comments').exec(function(err,messages){
		if(err){
			return console.log(err);
		}
		/*res.json(messages)*/
		return res.render('index',{'messages'
			:messages});

		// res.json(messages[0].comments[0].name)
	})
});

app.post('/',function(req,res){
	var newMessage = new Message({name:req.body.name, message:req.body.message});
	newMessage.save(function(err){
		if(err){
			console.log(err);
		}
		console.log("success");
		return res.redirect('/')
	})
});

app.post("/comments/:id",function(req,res){
	Message.findById(req.params.id).exec(function(err,message){
		if(err){
			return res.send(err);
		}
		if(!message){
			return res.send('no post found')
		}
		var comment = new Comment(req.body);
		console.log(comment)
		comment._message = message._id;
		comment.save(function(err,comment){
			if(err){
				return res.send(err);
			}
			console.log(comment._id);
			message.comments.push(comment._id);
			message.save(function(err,message){
				if(err){
					return res.send(err);
				}
				return res.redirect('/');
			})
		})
	})
});




app.listen(8000, function(){
	console.log('listening on port 8000...');
})






