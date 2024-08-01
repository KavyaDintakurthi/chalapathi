var express=require('Express');
var app=express();
var things=require('./express3.js');
//both express3.js and express3index.js
app.use('/:kavya',things);
app.listen(4000);