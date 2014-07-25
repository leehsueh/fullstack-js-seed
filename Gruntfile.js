// Generated on 2014-07-16 using generator-bootstrap-less 3.2.0
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {
  // load all grunt tasks
  require('load-grunt-tasks')(grunt);
  grunt.loadNpmTasks('grunt-build-control');
  grunt.loadNpmTasks('grunt-replace');  // for setting config.js based on env
  grunt.loadNpmTasks('grunt-angular-templates');  // compiling partials in js file; avoid caching issues

  // show elapsed time at the end
  require('time-grunt')(grunt);

  // configurable paths
  var yeomanConfig = {
    app: require('./client/bower.json').appPath || 'client/app',
    dist: 'dist'
  };

  grunt.initConfig({
    yeoman: yeomanConfig,
    express: {
      options: {
        // Override defaults here
        background: true,
        port: 9000
      },
      dev: {
        options: {
          script: 'app.js'
        }
      }
    },
    watch: {
      less: {
        files: ['<%= yeoman.app %>/styles/{,*/}*.less'],
        tasks: ['build:develop']
      },
      gruntfile: {
        files: ['Gruntfile.js']
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '<%= yeoman.app %>/*.html',
          '<%= yeoman.app %>/partials/**/*.html',
          '{.tmp,<%= yeoman.app %>}/styles/{,*/}*.css',
          '{.tmp,<%= yeoman.app %>}/scripts/**/*.js',
          '<%= yeoman.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
        ],
        // tasks: ['build:develop']
      },
      server: {
        files:  [ 'server/**/*' ],
        tasks:  [ 'express:dev', 'livereload-start' ]
      },
      // protractor: {
      //   files: ['app/scripts/**/*.js','test/e2e/**/*.js'],
      //   tasks: ['protractor:auto']
      // },
      karma: {
        files: ['app/scripts/**/*.js','test/unit/**/*.js'],
        tasks: []  //['test:unit']
      }
    },
    connect: {
      options: {
        port: 9002,
        // change this to '0.0.0.0' to access the server from outside
        hostname: 'localhost',
        livereload: 35729
      },
      livereload: {
        options: {
          open: true,
          base: [
            '.tmp',
            '<%= yeoman.app %>'
          ]
        }
      },
      test: {
        options: {
          port: 9999,
          base: [
            '.tmp',
            'test',
            '<%= yeoman.app %>'
          ]
        }
      },
      dist: {
        options: {
          base: '<%= yeoman.dist %>'
        }
      }
    },
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '.tmp',
            '<%= yeoman.dist %>/*',
            '!<%= yeoman.dist %>/.git*'
          ]
        }]
      },
      server: '.tmp'
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: [
        'Gruntfile.js',
        '<%= yeoman.app %>/scripts/{,*/}*.js',
        '!<%= yeoman.app %>/scripts/vendor/*',
        'test/spec/{,*/}*.js'
      ]
    },
    less: {
      dist: {
        files: {
          '<%= yeoman.app %>/styles/main.css': ['<%= yeoman.app %>/styles/main.less']
        },
        options: {
          sourceMap: true,
          sourceMapFilename: '<%= yeoman.app %>/styles/main.css.map',
          sourceMapBasepath: '<%= yeoman.app %>/',
          sourceMapRootpath: '/'
        }
      }
    },
    rev: {
      dist: {
        files: {
          src: [
            '<%= yeoman.dist %>/scripts/{,*/}*.js',
            '<%= yeoman.dist %>/styles/{,*/}*.css',
            // '<%= yeoman.dist %>/images/{,*/}*.{png,jpg,jpeg,gif,webp}',
            '<%= yeoman.dist %>/fonts/{,*/}*.*'
          ]
        }
      }
    },
    ngtemplates: {
      'myApp.templates': {
        src: '<%= yeoman.app %>/partials/**/*.html',
        dest: '<%= yeoman.dist %>/scripts/main.js',
        options: {
          url: function(url) { return url.replace('app/', ''); },
          append: true
        }
      }
    },
    useminPrepare: {
      html: '<%= yeoman.app %>/index.html',
      options: {
        dest: '<%= yeoman.dist %>'
      }
    },
    usemin: {
      html: ['<%= yeoman.dist %>/{,*/}*.html'],
      css: ['<%= yeoman.dist %>/styles/{,*/}*.css'],
      options: {
        dirs: ['<%= yeoman.dist %>']
      }
    },
    imagemin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>/images',
          src: '{,*/}*.{png,jpg,jpeg}',
          dest: '<%= yeoman.dist %>/images'
        }]
      }
    },
    svgmin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>/images',
          src: '{,*/}*.svg',
          dest: '<%= yeoman.dist %>/images'
        }]
      }
    },
    cssmin: {
      dist: {
        files: {
          '<%= yeoman.dist %>/styles/main.css': [
            '.tmp/styles/{,*/}*.css',
            '<%= yeoman.app %>/styles/{,*/}*.css'
          ]
        }
      }
    },
    htmlmin: {
      dist: {
        options: {
          /*removeCommentsFromCDATA: true,
          // https://github.com/yeoman/grunt-usemin/issues/44
          //collapseWhitespace: true,
          collapseBooleanAttributes: true,
          removeAttributeQuotes: true,
          removeRedundantAttributes: true,
          useShortDoctype: true,
          removeEmptyAttributes: true,
          removeOptionalTags: true*/
        },
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>',
          src: '*.html',
          dest: '<%= yeoman.dist %>'
        },
        {
          expand: true,
          cwd: '<%= yeoman.app %>',
          src: 'partials/**/*.html',
          dest: '<%= yeoman.dist %>'
        }]
      }
    },
    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= yeoman.app %>',
          dest: '<%= yeoman.dist %>',
          src: [
            '*.{ico,png,txt}',
            'fonts/{,*/}*.*',
            '.htaccess',
            '.htpasswd',
            'images/{,*/}*.{webp,gif}'
          ]
        }]
      },
      server: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= yeoman.app %>/bower_components/font-awesome/fonts/',
          dest: '<%= yeoman.app %>/fonts/font-awesome',
          src: ['*']
        },
        ]
      }
    },
    concurrent: {
      dist: [
        'less',
        'imagemin',
        'svgmin',
        'htmlmin'
      ]
    },
    buildcontrol : {
      options: {
        dir: 'dist',
        commit: true,
        push: true
      },
      master: {
        options: {
          // remote: '../',
          remote: 'git@github.com:goalbook/admin-frontend.git',
          branch: 'build-master'
        }
      },
      develop: {
        options: {
          // remote: '../',
          remote: 'git@github.com:goalbook/admin-frontend.git',
          branch: 'build-develop'
        }
      },
    },
    replace: {
      development: {
        options: {
          patterns: [{
            json: grunt.file.readJSON('./client/config/environments/development.json')
          }]
        },
        files: [
          {
            expand: true,
            flatten: true,
            src: ['./client/config/config.js'],
            dest: '<%= yeoman.app %>/scripts/services/'
          }
        ]
      },
      // staging: {
      //   options: {
      //     patterns: [{
      //       json: grunt.file.readJSON('./client/config/environments/staging.json')
      //     }]
      //   },
      //   files: [
      //     {
      //       expand: true,
      //       flatten: true,
      //       src: ['./client/config/config.js'],
      //       dest: '<%= yeoman.app %>/scripts/services/'
      //     }
      //   ]
      // },
      // production: {
      //   options: {
      //     patterns: [{
      //       json: grunt.file.readJSON('./client/config/environments/production.json')
      //     }]
      //   },
      //   files: [
      //     {
      //       expand: true,
      //       flatten: true,
      //       src: ['./client/config/config.js'],
      //       dest: '<%= yeoman.app %>/scripts/services/'
      //     }
      //   ]
      // }
    },
    shell: {
      options: {
        stdout: true
      },
      selenium: {
        command: './selenium/start',
        options: {
          stdout: false,
          async: true
        }
      },
      protractor_install: {
        command: 'node ./node_modules/protractor/bin/webdriver-manager update'
      },
      npm_install: {
        command: 'npm install'
      }
    },
    karma: {
      unit: {
        configFile: './client/test/karma-unit.conf.js',
        autoWatch: false,
        singleRun: true
      },
      unit_auto: {
        configFile: './client/test/karma-unit.conf.js',
        autoWatch: true,
        singleRun: false
      },
      unit_coverage: {
        configFile: './client/test/karma-unit.conf.js',
        autoWatch: false,
        singleRun: true,
        reporters: ['progress', 'coverage'],
        preprocessors: {
          'app/scripts/*.js': ['coverage']
        },
        coverageReporter: {
          type : 'html',
          dir : 'coverage/'
        }
      },
    },
    protractor: {
      options: {
        keepAlive: false,
        configFile: "./client/test/protractor.conf.js"
      },
      singlerun: {},
      auto: {
        keepAlive: true,
        options: {
          args: {
            seleniumPort: 4444
          }
        }
      }
    }
  });

  grunt.registerTask('serve', function (target) {
    if (target === 'dist') {
      return grunt.task.run(['build', 'connect:dist:keepalive']);
    }

    grunt.task.run([
      'clean:server',
      'less',
      'replace:development',
      'copy:server',
      // 'connect:livereload',
      'express:dev',
      'watch'
    ]);
  });

  // server just for e2e testing; basically omit the watch
  grunt.registerTask('serve:test', function (target) {
    grunt.task.run([
      'clean:server',
      'less',
      'copy:server',
      'connect:test'
    ]);
  });

  grunt.registerTask('test', [
    'replace:development',
    'test:unit',
    // 'test:e2e'
  ]);
  grunt.registerTask('test:unit', ['karma:unit']);
  grunt.registerTask('test:e2e', ['serve:test','protractor:singlerun']);

  grunt.registerTask('build:develop', [
    'clean:dist',
    'copy:server',
    // 'test',
    'replace:development',
    'useminPrepare',
    'concurrent',
    'cssmin',
    'concat',
    'uglify',
    'copy',
    'ngtemplates',
    'rev',
    'usemin'
  ]);

  grunt.registerTask('default', [
    'jshint',
    'test',
    'build'
  ]);
};
