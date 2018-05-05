module.exports = {
  uglify: {
    options: {
        banner: '/*! MIT License \r\n Copyright (c) <%= grunt.template.today("yyyy") %> Alejandro G. \r\n */ ',
        mangle: {
          reserved: ['jQuery']
        }
      },
    
    files: {
        'dist/coolstate.min.js': 'dist/coolstate.js'
     
    }
  }
};
