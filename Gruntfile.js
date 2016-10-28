'use strict';
module.exports = function(grunt) {

  grunt.initConfig({
      all: [
        'Gruntfile.js',
        'lcc/js/**/*.js',
        '!lcc/js/lcc.frontend.js'
      ]
    },
    sass: {
      dist: {
        options: {
          style: 'compressed',
          compass: false,
          sourcemap: false
        },
        files: {
          'lcc/css/lcc.css': [
            'lcc/scss/lcc.scss'
          ]
        }
      }
    },
    uglify: {
      dist: {
        files: {
          'lcc/js/lcc.frontend.js': [
            'lcc/js/**/*.js'
          ]
        }
      }
    },
    watch: {
      options: {
        livereload: true
      },
      sass: {
        files: [
          'lcc/scss/**/*.scss'
        ],
        tasks: ['sass']
      }
    },
    clean: {
      dist: [
        'assets/build/lcccss',
        'lcc/build/lcc.frontend.js'
      ]
    }
  });

  // Load tasks
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');

  // Register tasks
  grunt.registerTask('default', [
    'clean',
    'sass',
    'uglify'
  ]);
  grunt.registerTask('dev', [
    'watch'
  ]);

};