module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);

  var configs = require('load-grunt-configs')(grunt, {
    config: {
      src: 'tasks/*.js'
    }
  });

  grunt.initConfig(configs);
  
  grunt.registerTask('clear', ['clean']);
  grunt.registerTask('copy-resources', ['copy:assets']);
}
