var express = require("express");
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));


app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/',function(request,response){
	response.render('index',{title: "my Express project"});
})

app.get("/users/:id",function(request,response){
	console.log("The user id requested is,", request.params.id);
	request.send("You requested the user with id:", request.params.id);
})

app.post('/users',function(request,response){
	console.log("POST DATA \n\n",request.body);
	response.redirect('/');
})



app.listen(8000,function(){
	console.log("listening on 8000");
})