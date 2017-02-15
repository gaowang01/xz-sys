/*
*BDD测试演示
*/

var Nightmare = require('nightmare');
var expect = require('chai').expect;
var fork = require('child_process').fork;

describe('BDD测试演示',function(){
	var child;

	before(function (done) {
	   child = fork('./qa/server.js');
	   child.on('message', function (msg) {
		    if (msg === 'listening') {
		        done();
		    }
	  	});
	});

	it('点击后标题改变', function(done) {
	    var nightmare = Nightmare({ show: true });
	    nightmare
	      .goto('http://127.0.0.1:8080/')
	      .click('h1')
	      .wait(1000)
	      .evaluate(function () {
	        return document.querySelector('h1').textContent;
	      })
	      .end()
	      .then(function(text) {
	        expect(text).to.equal('Hello Clicked');
	        done();
	      })
	});

	after(function () {
	    child.kill();
	});

});