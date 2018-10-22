var { gulp, watch } = require('gulp');

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

function watch(cb) {
  watch('./app/index.html', function() {
    html(cb);
  });
}

// watch('./app/index.html', html);

exports.html = html;
exports.default = test;
exports.watch = watch;
