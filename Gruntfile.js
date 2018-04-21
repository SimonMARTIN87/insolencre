module.exports = function (grunt) {
	grunt.initConfig({
		concurrent: {
	        dev: [
	            'nodemon:dev',
	            'watch'
	        ],
	        options: {
	            logConcurrentOutput: true
	        }
	    },
		browserify: {
			main: {
				src: 'source/js/main.js',
				dest: 'public/js/main.js'
			}
		},
		watch: {
	     	scripts: {
	        	files: "source/js/*.js",
	        	tasks: ["browserify"],
				options: {
					livereload: true,
				}
	      	}
	    },
	    nodemon: {
			dev: {
				script: 'keystone.js'
			}
		}
	});

	//grunt.loadTasks('../../tasks');
	// grunt.loadNpmTasks("grunt-modernizr");
	// grunt.loadNpmTasks('grunt-contrib-copy');
	// grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-concurrent');
	grunt.loadNpmTasks('grunt-nodemon');
	grunt.loadNpmTasks('grunt-browserify');
	grunt.registerTask('default', ['browserify','concurrent']);

};