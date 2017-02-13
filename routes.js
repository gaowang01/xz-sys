var home = require('./handlers/home.js');

module.exports = function(app){
	//home page
	app.get('/',home.render);
}