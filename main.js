//express
var express = require('express');
var app = express();

var bodyParser = require('body-parser');
/*****************************************
*view engine
******************************************/
var exphbs = require('express-handlebars');
var hbs = exphbs.create({
	defaultLayout:'layout',
	partialsDir: [
        'views/shared/',    //#reuse partials
        'views/partials/' //# page partials
    ],
    helpers:{}
});
app.engine('handlebars',hbs.engine);
app.set('view engine','handlebars');
/********************************************
*startup website
*********************************************/
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//For Project File
require('./routes.js')(app);

app.listen(8080,function(){
	console.log('✨ app start at port 8080 ✨');
});