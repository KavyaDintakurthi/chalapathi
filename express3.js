var express=require('express');
var router= express.Router();
router.get('/',function(req,res){
	res.send("GET route on things");
});
router.post('/',function(req,res){
	res.send("POST route on things\n");
});
//export this router to use in our express3index.js
module.exports=router;