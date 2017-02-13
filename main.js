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
require('./routes.js')(app);

app.listen(8080,function(){
	console.log('✨ app start at port 8080 ✨');
});