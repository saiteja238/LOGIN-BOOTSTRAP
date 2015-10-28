var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('login', ['logintable']);
var bodyParser = require('body-parser');


app.use(bodyParser.json());


console.log(db)

//app.get('logintable',function(req))
//db.logintable.findOne({id: "alpha"}, function(err, doc) {
//    
//   console.log("No ID");
//    
//    
//   
//});

app.get('/logintable', function(req, res){
	var id = "alpha";
	console.log(id);
db.logintable.findOne({id: mongojs.ObjectId(id)}, function(err, doc) {
    
   	res.json(doc);
	});
});
app.listen(3000);
console.log("Server running on port 3000");