var user = require('../models/user');
exports.render = function(req,res){
	res.render('login',{layout:false});
}

exports.Auth = function(req,res){
	console.log('#body#',req.body.userId,req.body.password);
	user.findUser(req.body.userId,req.body.password,function(isExist){
		if (isExist) {res.send({flag:0,message:'登录成功'})}
		else{res.send({flag:-1,message:'用户名密码错误'})}
	})
}