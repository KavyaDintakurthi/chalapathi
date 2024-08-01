var express=require('express');
var app= express();
app.get('/kavya',function(req,res){
	res.send("Welcome to express js world tested by kavya");
});
app.listen(3000);