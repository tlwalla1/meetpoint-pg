module.exports = function(grunt) {
    grunt.config('watch', {
        options: {
            livereload: true
        },
        babel: {
            files: ['www/js-babel/**/*.js'],
            tasks: ['babel:dist'],
            options: {
                spawn: false
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
};
