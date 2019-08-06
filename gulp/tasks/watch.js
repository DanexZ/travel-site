var gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create(); //automatyczne przeładowywanie strony przy updatetowaniu

gulp.task('watch', function(){

    browserSync.init({
        notify: false, //nie będzie się pojawiał na stronie kwadracik inf. o przeładowaniu
        server: {
            baseDir: 'app'
        }
    });

    //który plik mam obserwować?
    watch('./app/index.html', function(){
        browserSync.reload(); //przeładuj stronę, kiedy nastąpi zmiana w tym pliku
    });

    //(**) include all folders | (*).css include all css files at current folder /
    watch('./app/assets/css/**/*.css', function(){
        gulp.start('cssInject');
    })

    watch('./app/assets/scripts/**/*.js', function(){
        gulp.start('scriptsRefresh');
    });
});

//drugi argumanet to zależne zadania, podaję w tablicy nazwy zadań
gulp.task('cssInject', ['styles'], function(){
    return gulp.src('./app/temp/styles/style.css')
        .pipe( browserSync.stream() );
});

gulp.task('scriptsRefresh', ['scripts'], function(){
	browserSync.reload();
})