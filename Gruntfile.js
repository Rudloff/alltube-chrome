/*jslint node: true */
module.exports = function (grunt) {
    'use strict';
    grunt.initConfig(
        {
            jslint: {
                scripts: {
                    src: ['alltube.js']
                },
                Gruntfile: {
                    src: ['Gruntfile.js']
                }
            },
            jsonlint: {
                manifests: {
                    src: '*.json',
                    options: {
                        format: true
                    }
                }
            }
        }
    );

    grunt.loadNpmTasks('grunt-jslint');
    grunt.loadNpmTasks('grunt-jsonlint');

    grunt.registerTask('lint', ['jslint', 'jsonlint']);
};
