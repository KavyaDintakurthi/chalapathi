var express=require('express');
var bodyParser=require('body-parser');
var multer=require('multer');
var upload=multer();
var app=express();
app.get('/',function(req,res){
	res.render('index');
});
app.set('view engine','ejs');
app.set('views','./views');
//for Parsing applictaion/json
app.use(bodyParser.json());
//for parsing application/xwww-
app.use(bodyParser.urlencoded({extended:true}));
//form-urlencoded
//for parsing multipart/form-data
app.use(upload.array());
app.use(express.static('public'));
app.post('/',function(req,res){
	console.log(req.body);
	res.send("recieved your request!!");
});
app.listen(5000);