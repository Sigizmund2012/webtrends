/* Конфигурация проекта */

var build = 'build/';
var dest = 'dest/';
var bower = 'bower_components/';

module.exports = {
	copy: {
		bootstrap: {
			src: bower + 'bootstrap-sass/assets/**/*.*',
			dest: build + 'scss/bootstrap/'
		},
		html: {
			src: build + '*.html',
			dest: dest
		},
		js: {
			src: build + 'js/**/*.js',
			dest: dest + 'js/'
		},
		img: {
			src: build + 'img/**/*.*',
			dest: dest + 'img/'
		}
	},
	styles: {
		src: build + 'scss/*.scss',
		dest: dest + 'css/'
	},
	watch: {
		server: dest,
		html: build + '*.html',
		css: build + 'scss/*.scss',
		js: build + 'js/**/*.js',
		img: build + 'img/**/*.*',
		browsersync: {
			html: dest + '*.html',
			css: dest + 'css/',
			js: dest + 'js/**/*.js',
			img: dest + 'img/**/*.*'
		}
	}
};