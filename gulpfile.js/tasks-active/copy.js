var gulp = require('gulp'),
	config = require('../../gulpconfig').copy;

gulp.task( 'copy-bootstrap', function () {
	return gulp.src( config.bootstrap.src )
		.pipe( gulp.dest( config.bootstrap.dest ) );
} );

gulp.task( 'copy-html', function () {
	return gulp.src( config.html.src )
		.pipe( gulp.dest( config.html.dest ) );
} );

gulp.task( 'copy-js', function () {
	return gulp.src( config.js.src )
		.pipe( gulp.dest( config.js.dest ) );
} );

gulp.task( 'copy-img', function () {
	return gulp.src( config.img.src )
		.pipe( gulp.dest( config.img.dest ) );
} );

gulp.task( 'copy-all', [ 'copy-bootstrap', 'copy-html', 'copy-js', 'copy-img' ] );