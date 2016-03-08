module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {  //uglify 用来压缩js 代码
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
        footer:'\n/*! <%= pkg.name %> 最后修改于： <%= grunt.template.today("yyyy-mm-dd") %> */'//添加footer
      },
      buildall: {
        files:[{
            expand: true,
            cwd: 'app/src/scripts',
            src: '**/*.js',
            dest: 'app/src/dest'
        }]
        //src: 'app/src/scripts/<%= pkg.name %>.js',
        //dest: 'app/build/<%= pkg.name %>.min.js'
      }
    },
  jshint: {   //jshint用来检查js代码规范  
    files: ['Gruntfile.js', 'app/src/scripts/**/*.js'], //要进行js检查的文件
    options: {  //这里是覆盖JSHint默认配置的选项  
      globals: {  
        jQuery: true,  
        console: true,  
        module: true,  
        document: true  
      }  
    }  
  },
   watch: {  //watch用来监听文件，当文件发生变化时会执行tasks中指定的任务  
     //监听的文件  
     files: ['<%= jshint.files %>','app/src/scripts/**/*.js'],
     tasks: ['jshint']  
   }
  });

  // 加载包含 "uglify" 任务的插件。
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint'); 
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-wiredep');
  // 默认被执行的任务列表。
  grunt.registerTask('default', ['uglify','watch','jshint']);

};