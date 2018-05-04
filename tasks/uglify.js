module.exports = {
  uglify: {
    options: {
        mangle: {
          reserved: ['jQuery']
        }
      },
    
    files: {
        'dist/coolstate.min.js': 'dist/coolstate.js'
     
    }
  }
};