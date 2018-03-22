const gulp = require("gulp")
const clean = require("gulp-clean")
const rename = require("gulp-rename")

const paths = {
    scriptsBuildPath: "deploy/build/"
}

gulp.task("clean", function() {
    return gulp.src(paths.scriptsBuildPath, { read: false })
        .pipe(clean({ force: true }))
})

gulp.task("build", function() {
    gulp.src("onload-function-stack.js")
        .pipe(rename("index.js"))
        .pipe(gulp.dest(paths.scriptsBuildPath))
    gulp.src("readme.md")
        .pipe(gulp.dest(paths.scriptsBuildPath))
    return gulp.src("package.json")
        .pipe(gulp.dest(paths.scriptsBuildPath))
})

gulp.task("default", ["build"])