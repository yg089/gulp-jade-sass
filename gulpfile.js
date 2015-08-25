var gulp = require('gulp'),
	jade = require('gulp-jade'),
	sass = require('gulp-sass');

// --------------------------------
// Gulp 
// .task() 
// .start()
// .watch() 
// .dest() 
// .src()
// --------------------------------

//Gulp 업무(task) 등록
// gulp.task('업무이름', 업무를 처리할 함수)

var config = {
	'jade' : {'pretty' :true}
	'sass' : {'outputStyle':'compact'}
}

gulp.task('default', ['jade', 'sass', 'watch']);

gulp.task('watch', function  () {
	gulp.watch(['src/index.jade'], ['jade']);
	gulp.watch(['src/sass/style.scss'], ['sass']);
})

gulp.task('jade', function () {
	gulp.src('src/index.jade')
		.pipe(jade(config.jade))
		.pipe(gulp.dest('dist'));
});

gulp.task('sass', function  () {
	gulp.src('src/style.scss')
		.pipe(sass())
		.pipe(gulp.dest('dist/sass'));
})