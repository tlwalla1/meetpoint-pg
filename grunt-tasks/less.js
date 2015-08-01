module.exports = function(grunt) {
    grunt.config('less', {
        development: {
            options: {
                paths: ['www/css']
            },
            files: {
                'www/css/default/index.min.debug.css': 'www/less/themes/default/index.less'
            }
        },
        production: {
            options: {
                paths: ['www/css'],
                compress: true
            },
            files: {
                'www/css/default/index.min.css': 'www/less/themes/default/index.less'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
};
