'use script';
/**
 * 1、LESS编译 压缩 合并
 * 2、JS合并 压缩 混淆
 * 3、img复制
 * 4、html压缩
 */

var gulp = require('gulp');
var less = require('gulp-less');
var cssnano = require('gulp-cssnano');

gulp.task('style', function() {
	gulp.src('src/styles/*.less')
	.pipe(less())
	.pipe(cssnano())
	.pipe(gulp.dest('dist/styles'))
});