var gulp = require('gulp'),
    config = require('../../gulpconfig').styles,
	sass = require( 'gulp-sass' ),
    autoprefixer  = require('gulp-autoprefixer');

gulp.task( 'styles', function () {
	return gulp.src( config.src )
		.pipe( sass() )
		.pipe( autoprefixer( config.autoprefixer ) )
		.pipe( gulp.dest( config.dest ) );
} );
