/**
 * @fileoverview 上传到cdn
 */


module.exports = function(grunt) {

    require('load-grunt-tasks')(grunt);

    //自定义的本地任务
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),
        //上传项目代码到线上
        lefdupload: require('./lefdupload')

    });

    grunt.registerTask('release', function(target) {
        if (target == 'js') {
            grunt.task.run(['lefdupload:js']);
            return;
        }
        if (target == 'css') {
            grunt.task.run(['lefdupload:css']);
            return;
        }
        grunt.task.run(['lefdupload:css', 'lefdupload:js']);
    });


};
