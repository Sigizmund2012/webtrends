var gulp = require( 'gulp' );
var browserSync = require( 'browser-sync' );
var config = require('../../gulpconfig').watch;

gulp.task('serve', ['styles', 'copy-html', 'copy-js', 'copy-img'], function() {

	browserSync.init({
		server: config.server
	});

	gulp.watch( config.css, ['styles']);
	gulp.watch( config.html, ['copy-html']);
	gulp.watch( config.js, ['copy-js']);
	gulp.watch( config.img, ['copy-img']);
	gulp.watch( config.browsersync.html ).on('change', browserSync.reload);
	gulp.watch( config.browsersync.css ).on('change', browserSync.reload);
	gulp.watch( config.browsersync.js ).on('change', browserSync.reload);
	gulp.watch( config.browsersync.img ).on('change', browserSync.reload);
});