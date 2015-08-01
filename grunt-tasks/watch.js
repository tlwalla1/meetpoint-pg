module.exports = function(grunt) {
    grunt.config('watch', {
        options: {
            livereload: true
        },
        babel: {
            files: ['www/js-babel/*.js'],
            tasks: ['babel'],
            options: {
                spawn: false
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
};
