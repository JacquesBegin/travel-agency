var gulp = require('gulp');

// gulp.task('default', function(){
//   console.log("Gulp task created");
// });


function test(cb) {
  console.log("Gulp task: test");
  cb();
}

function html(cb) {
  console.log("Gulp task: html");
  cb();
}

exports.html = html;
exports.default = test;