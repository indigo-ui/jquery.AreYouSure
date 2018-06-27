module.exports = function(grunt) {
  grunt.config.init({
    karma: {
      options: {
        browsers: [ 'Chrome', 'Firefox', 'IE' ],
        frameworks: [ 'jasmine' ],
        reportSlowerThan: 500,
        singleRun: true
      },
      unit: {
        files: [
          { pattern: 'node_modules/jquery/dist/jquery.min.js' },
          { pattern: 'node_modules/jasmine-jquery/lib/jasmine-jquery.js' },
          { pattern: 'jquery.are-you-sure.js' },
          { pattern: 'spec/javascripts/*.js' },
          { pattern: 'spec/javascripts/fixtures/**/*.html', included: false }
        ]
      }
    }
  });

  
  grunt.registerTask('test', 'Run tests.', [ 'karma' ]);
  grunt.registerTask('default', [ 'test' ]);
  
  grunt.loadNpmTasks('grunt-karma');
};
