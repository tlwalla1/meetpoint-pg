module.exports = function(grunt) {
    grunt.config('babel', {
        options: {
            sourceMap: false,
            //modules: 'amd',
            moduleIds: true,
            moduleRoot: 'www',
            sourceRoot: 'js-babel',
            blacklist: [
                'strict'
            ]
        },
        dist: {
            files: [{
                expand: true,
                cwd: 'www/js-babel',
                src: ['**/*.js'],
                dest: 'www/js'
            }]
        }
    });

    grunt.loadNpmTasks('grunt-babel');
};
