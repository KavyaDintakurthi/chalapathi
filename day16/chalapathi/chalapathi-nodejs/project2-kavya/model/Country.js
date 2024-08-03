const mongoose=require('mongoose')
const Schema=mongoose.Schema
const passportLocalMongoose=require('passport-local-mongoose');
var Country=new Schema({
	cid:{
		type:Number
	},
	cname:{
		type:String
	},
	cdob:{
		type:Date
	},
	caddress:{
		type:String
	},
	cpassword:{
		type:String
	}

})
Country.plugin(passportLocalMongoose);
module.exports=mongoose.model('Politics',Country) 