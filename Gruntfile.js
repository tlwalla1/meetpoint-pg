module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        products: {
            'meetpoint-pg': {
                basePath: '.'
              }
          },
      });

    // Load per-task config from separate files
    grunt.loadTasks('grunt-tasks');
};
