/*
*TDD测试演示
*/

var math = require('../lib/Math.js');
var expect = require('chai').expect;

describe('mocha测试',function(){
	it('2加3应该等于5',function(){
		expect(math.add(2,3)).to.be.equal(5);
	});

	it('4减2应该等于2',function(){
		expect(math.sub(4,2)).to.be.equal(2);
	});
});