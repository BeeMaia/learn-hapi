// ref: https://github.com/dwyl/hapi-typescript-example
// https://damienpontifex.github.io/my-typescript-project-structure-with-gulp

// start with just gulp
'use strict'

let gulp = require('gulp')
let tsc = require('gulp-typescript')
let tslint = require('gulp-tslint')
let nodemon = require('gulp-nodemon')
let del = require('del')

// /*  Variables */
let tsProject = tsc.createProject('tsconfig.json')
let sourceFiles = 'src/**/*.ts'
let testFiles = 'test/**/*.ts'
// our config files
let jsonFiles = 'src/**/*.json'
let outDir = require('./tsconfig.json').compilerOptions.outDir
let entryPoint = './build/index.js'

/**
 * Remove build directory.
 */
gulp.task('clean', function() {
    return del([
        outDir
        ])
})


/**
 * Lint all custom TypeScript files.
 */
gulp.task('tslint', () => {
    return gulp.src(sourceFiles)
        .pipe(tslint())
        .pipe(tslint.report('verbose'))
})

/**
 * Compile TypeScript sources and create javascript files in build directory.
 * will compile incrementally
 */
var compile =  function() {
    console.log('compiling files')
    let tsResult = gulp.src([sourceFiles, testFiles])
        .pipe(tsc(tsProject))
    return tsResult.js
        .pipe(gulp.dest(outDir))

}

/**
* Copy JSON files to build directory
**/

var copyjson = function() {
    return gulp.src(jsonFiles)
    .pipe(gulp.dest(outDir))
}

/**
 * Watch for changes in TypeScript, HTML and CSS files.
 */
 var watch = function() {
    gulp.watch([sourceFiles], ['compile']);
}


// gulp.task('test', ['build'], () => {
//     return gulp.src(['build/test/**/*.js'], { read: false })
//         .pipe(mocha({ reporter: 'list' }))
//         .once('error', () => {
//             process.exit(1);
//         })
//         .once('end', () => {
//             process.exit();
//         });
// })

gulp.task('watch', watch)
gulp.task('compile', compile)
gulp.task('copyjson', copyjson)

gulp.task('default', function() {
    copyjson();    
    watch();
    nodemon({
        script: entryPoint
        , env: { 'NODE_ENV': 'development' }
    }).on('restart', ['watch'])
})