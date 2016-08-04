var gulp = require('../node_modules/gulp');
var t = require('../src/index.js');

gulp.task('default',function(){
	gulp.src('./input/*.html')
	.pipe(t('./input/'))
	.pipe(gulp.dest('./output/'));
})