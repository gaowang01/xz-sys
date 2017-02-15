/*
*BDD测试服务器
*/

//express
var express = require('express');
var app = express();

//view engine
var exphbs = require('express-handlebars');
app.engine('handlebars',exphbs({defaultLayout:'layout'}));
app.set('view engine','handlebars');

//res dir
app.use(express.static(__dirname + '/public'));

//For Project File
app.get('/',function(req,res){
	res.render('./home');
});

app.listen(8080,function(){
	process.send('listening');
});