module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: { // Task
      dist: { // Target
        options: { // Target options
          style: 'expanded'
        },
        files: { // Dictionary of files
          './dist/css/inthebones.css': './scss/inthebones.scss'
        }
      }
    },
    cssmin: {
      target: {
        files: [{
          expand: true,
          src: './dist/css/inthebones.css',
          dest: '',
          ext: '.min.css'
        }]
      }
    }
  });

  // Load the plugin that provides the "sass" task
  grunt.loadNpmTasks('grunt-contrib-sass');
  // Load the plugin that providses the "cssmin" task
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  // Extended version.
  grunt.registerTask('default', ['sass']);
  // Minified version.
  grunt.registerTask('minified', ['sass', 'cssmin']);

};
