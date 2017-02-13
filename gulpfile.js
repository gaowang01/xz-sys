var gulp = require('gulp');
var through = require('through2');
var pkg = require('./package');


var jshint = require('gulp-jshint');
var jshintConfig = pkg.jshintConfig;
//disable lookup
jshintConfig.lookup = false;

//mocha
var mocha = require('gulp-mocha');

//lint
gulp.task('lint',function(){
	return gulp.src(['./main.js','./routes.js',
		'./lib/**/*.js','public/script/**/*.js'])
		.pipe(jshint(jshintConfig))
		.pipe(jshint.reporter('jshint-stylish'));
});

//mocha
gulp.task('mocha',function(){
	return gulp.src('./qa/qa-mocha.test.js',{read:false})
		.pipe(mocha({reporter:'spec'}));
})

