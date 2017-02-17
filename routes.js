var home = require('./handlers/home.js');
var login = require('./handlers/login.js');

module.exports = function(app){
	//home page
	app.get('/',home.render);

	//login
	app.get('/login',login.render);
	app.post('/auth',login.Auth)
};