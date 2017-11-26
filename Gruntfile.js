/*jshint esversion: 6 */
const webpackConfig = require('./webpack.config');

module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        html2js: {
              build: {
                  options: {
                      module: null,
                      base: 'src',
                      htmlmin: {
                          collapseBooleanAttributes: true,
                          collapseWhitespace: true,
                          removeComments: true,
                          removeScriptTypeAttributes: true,
                          removeStyleLinkTypeAttributes: true,
                      }
                  },
                  files: [{
                      expand: true,
                      src: ['src/components/**/*.html'],
                      ext: '.html.js',
                  }],
              },
        },

        jshint: {
            files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
            options: {
                globals: {
                    jQuery: true,
                    console: true,
                    module: true,
                    document: true
                }
            }
        },

        sass: {
          dev: {
              files: {
                  'styles/main.css': 'styles/main.scss'
              }
          }
        },

        watch: {
            js: {
                files: ['src/**/*.js', 'test/**/*.js'],
                tasks: ['js']
            },
            sass: {
                files: '**/*.sass',
                tasks: ['css'],
                options: {
                    livereload: 35729
                }
            },
            all: {
                files: ['**/*.html'],
                options: {
                    livereload: true
                }
            }
        },

        "webpack-dev-server": {
            options: {
                webpack: webpackConfig,
                hot: true,
                compress: true,
                port: 8080,
                contentBase: webpackConfig.output.path
            },
            start: {
                webpack: {
                    devtool: 'cheap-eval-sourcemap'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-webpack');
    grunt.loadNpmTasks('grunt-html2js');
    grunt.loadNpmTasks('webpack-dev-server');

    grunt.registerTask('webpack', ['html2js', 'jshint', 'webpack-dev-server']);
};