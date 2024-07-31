var url=require('url');
var adr='https://www.facebook.com?year=2024&month=August';
/*Parse address*/
var q=url.parse(adr,true);
/*The Parse method returns an object containing url properties*/
console.log(q.host);
console.log(q.pathname);
console.log(q.search);
var qdata=q.query;
console.log(qdata.month);