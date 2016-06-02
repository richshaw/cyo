var gulp = require('gulp');  

var plugins = require("gulp-load-plugins")({
    pattern: ['gulp-*', 'gulp.*', 'main-bower-files'],
    replaceString: /\bgulp[\-.]/
});

var filterByExtension = function(extension){  
    return plugins.filter(function(file){
        return file.path.match(new RegExp('.' + extension + '$'));
    });
};

/** Build src **/
gulp.task('buildsrc', ['js','css'], function() {console.log("DONE");});


gulp.task('js', function() {
    gulp.src(plugins.mainBowerFiles())
        .pipe(filterByExtension('js'))
        //.pipe(plugins.uglify())
        .pipe(gulp.dest('./src/js'));
});

gulp.task('css', function() {
    gulp.src(plugins.mainBowerFiles())
        .pipe(filterByExtension('css'))
        .pipe(gulp.dest('./src/css'));
});


gulp.task('usemin', function () {
  return gulp.src('./src/index.html')
      .pipe(plugins.usemin({
        css: ['concat', plugins.minifyCss(), plugins.rev()],
        app: [
            plugins.ngAnnotate(),
            plugins.sourcemaps.init({
                loadMaps: true
            }),
            'concat',
            plugins.uglify(),
            plugins.rev(),
            plugins.sourcemaps.write('./')
        ],
        vendor:[
            plugins.sourcemaps.init({
                loadMaps: true
            }),
            'concat',
            plugins.uglify(),
            plugins.rev(),
            plugins.sourcemaps.write('./')
        ]
      }))
      .pipe(gulp.dest('./dist/'));
});


var filesToMove = [
        './src/**/*.*',
        './src/**/.*'  
    ];

gulp.task('move',[], function(){
  // the base option sets the relative root for the set of files,
  // preserving the folder structure
  gulp.src(filesToMove)
  .pipe(gulp.dest('./dist'));
});

gulp.task('builddist', function () {
    return gulp.src('./src/img/**/*')
        .pipe(gulp.dest('./dist/img'));
});



