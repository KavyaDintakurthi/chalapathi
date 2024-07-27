function formlogin()
{
var name=document.login.uname;
var age=document.login.uage;
var pin=document.login.upin;
var pan=document.login.upan;
var pass=document.login.upass;
var num=document.login.unum;
if(uname_validation(name,8,10))
{
if(uage_validation(age,99))
{
if(upin_validation(pin))
{
if(upan_validation(pan))
{
if(upass_validation())
{
if(unum_validation())
{
}
}
}
}
}
}
return false;
}
function uname_validation(name,mx,my)
{
var name_len=name.value.length;
if(name_len > mx && name_len < my && typeof name_len=="string")
{
	return true;
}
	alert("Name must be in character and btwn 8 n10 characters");
	return false;
}
function uage_validation(age,x)
{
	if(age<0||age>x)
	{
		alert("age must be positive and below 100");
		return false;
	}
	return true;
}
function upin_validation(pin)
{
var letters=/^[0-9].{6}+$/;
if(pin.value.match(letters))
{
	return true;
}
else{

	alert("pincode must be positive and between 0-9");
	return false;
}
}
function upan_validation(pan)
{

}