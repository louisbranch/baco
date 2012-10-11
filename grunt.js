/*global module:false*/
module.exports = function(grunt) {

  // Load Dependencies
  grunt.loadNpmTasks('grunt-css');
  grunt.loadNpmTasks('grunt-stylus');

  // Project configuration.
  grunt.initConfig({
    pkg: '<json:package.json>',
    meta: {
      banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
        '<%= pkg.homepage ? "* " + pkg.homepage + "\n" : "" %>' +
        '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
        ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */'
    },
    stylus: {
      compile: {
        options: {
          'paths' : ['assets/stylesheets/*.styl']
        },
        files: {
          'tmp/stylesheets/layout.css' : 'assets/stylesheets/layout.styl',
          'tmp/stylesheets/content.css' : 'assets/stylesheets/content.styl',
          'tmp/stylesheets/menu.css' : 'assets/stylesheets/menu.styl'
        }
      }
    },
    concat: {
      dist: {
        src: 'vendors/javascripts/**/*.js',
        dest: 'tmp/javascripts/<%= pkg.name %>.js'
      },
      css: {
        src: ['vendors/stylesheets/**/*.css', 'tmp/stylesheets/**/*.css'],
        dest: 'tmp/<%= pkg.name %>.css'
      }
    },
    min: {
      dist: {
        src: 'tmp/javascripts/<%= pkg.name %>.js',
        dest: 'public/javascripts/<%= pkg.name %>.min.js'
      }
    },
    cssmin: {
      css: {
        src: 'tmp/<%= pkg.name %>.css',
        dest: 'public/stylesheets/<%= pkg.name %>.min.css'
      }
    },
    watch: {
      client: {
        files: 'assets/javascripts/**/*.js',
        tasks: 'concat:dist min'
      },
      styles: {
        files: 'assets/stylesheets/**/*.styl',
        tasks: 'stylus concat:css cssmin'
      }
    },
    uglify: {}
  });

  // Default task.
  grunt.registerTask('default', 'stylus concat min cssmin');

};
