module.exports = function(grunt) {
    grunt.config('less', {
        development: {
            options: {
                paths: ['www/css']
            },
            files: {
                'www/css/index.min.debug.css': 'www/less/index.less'
            }
        },
        production: {
            options: {
                paths: ['www/css'],
                compress: true
            },
            files: {
                'www/css/index.min.css': 'www/less/index.less'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
};
