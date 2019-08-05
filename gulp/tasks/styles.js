var gulp = require('gulp'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'), //prefixuje
cssvars = require('postcss-simple-vars'), //pozwala na używanie zmiennych
nested = require('postcss-nested'), //pozwala na zagniedżanie
cssImport = require('postcss-import'), //importowaniemodularnych css i scalanie z plikiem głównym
mixins = require('postcss-mixins'),
hexrgba = require('postcss-hexrgba'); 

gulp.task('styles', function(){
    
    return gulp.src('./app/assets/css/style.css')
        .pipe( postcss([cssImport, mixins, cssvars, nested, hexrgba, autoprefixer]) )
        .on('error', function(errorInfo){
            //wyświetl informacje o błędzie i to w odpowiedni sposób
            console.log( errorInfo.toString() );
            //nie zatrzymuj obserowania jeśli wystąpi błąd w plikach
            this.emit('end'); 
        })
        .pipe( gulp.dest('./app/temp/styles') );
});



