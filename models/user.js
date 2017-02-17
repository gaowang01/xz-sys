var credentials = require('../credentials');
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var connectionString = 'mongodb://192.168.100.47:27017/xz-sys';
//'credentials.mongo.development.connectionString;'

var findUser = function(userId,password,cb){

	var findDocuments = function(db,callback){
		var collection = db.collection('users');
		collection.find({username:userId,password:password}).toArray(function(err,docs){
			assert.equal(err,null);
			console.log('#docs',docs);
	    	callback(docs);
		})
	}

	MongoClient.connect(connectionString,function(err,db){
		assert.equal(null,err);
		console.log('#connect success#');
		findDocuments(db,function(docs){
			cb(docs.length > 0);
			db.close();
		});
	});
}

module.exports = {
	findUser:findUser
}
