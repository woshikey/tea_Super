const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const sass = require('gulp-sass');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const connect = require('gulp-connect');
//压缩html
gulp.task('html',function(){
	gulp.src('app/**/*.html')
	.pipe(htmlmin({collapseWhitespace: true}))
	.pipe(gulp.dest('dist/'))
	.pipe(connect.reload());
});

//sass
gulp.task('sass',function(){
	gulp.src('app/sass/*.scss')
	.pipe(sass({outputStyle:'expanded'}))
	.pipe(gulp.dest('dist/css'))
	.pipe(connect.reload());
});

//压缩js,ES6-ES5转码
gulp.task('js',function(){
	//读取js,不读取app/libs/**/*.js
	gulp.src(['app/**/*.js','!app/libs/**/*.js'])
	.pipe(babel({
		presets: ['@babel/env']
	}))
	.pipe(uglify())
	.pipe(gulp.dest('dist'))
	.pipe(connect.reload());
});
//转移libs里的js
gulp.task('libs',function(){
	gulp.src('app/libs/**/*.js')
	.pipe(gulp.dest('dist/libs'));
});

//转移图片
gulp.task('img',function(){
	//转移所有格式的图片
	gulp.src('app/images/**/*')
	.pipe(gulp.dest('dist/images'))
	.pipe(connect.reload());
});

//开服务器
gulp.task('server',function(){
	connect.server({
		root: 'dist',//服务器根目录
		livereload: true,
		port:888//端口号
	})
});


//开启监控
gulp.task('watch',function(){
	gulp.watch('app/**/*.html',['html']);
	gulp.watch('app/sass/*.scss',['sass']);
	gulp.watch('app/**/*.js',['js']);
	gulp.watch('app/images/**/*',['img']);
});
//一起执行
gulp.task('default',['html','sass','js','libs','img','server','watch'])