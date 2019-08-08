var gulp = require('gulp'),
svgSprite = require('gulp-svg-sprite'), //paczka do tworzenia spritów
rename = require('gulp-rename'),
del = require('del'); //paczka do usuwania

//musisz podać taki parametr do svgSprite aby utworzył sprite w podfolderze css
var config = {
    //po dodaniu tego shape coś jest nie tak z nazwą pliku
    shape: {
        spacing: {
            padding: 2
        }
    },
    mode: {
        css: {
            sprite: 'sprite.svg', //pattern
            render: {
                css: {
                    template: './gulp/templates/sprite.css'
                }
            }
        }
    }
}

gulp.task('beginClean', function(){
    //podaję w tablicy foldery które chcę wyczyścić
    return del(['./app/temp/sprite', './app/assets/images/sprites'])
});

gulp.task('createSprite', ['beginClean'], function(){
    return gulp.src('./app/assets/images/icons/**/*.svg')
        .pipe( svgSprite(config) )
        .pipe( gulp.dest('./app/temp/sprite') );
});

gulp.task('copySpriteGraphic', ['createSprite'], function(){
    return gulp.src( './app/temp/sprite/css/**/*.svg' )
        .pipe( gulp.dest( './app/assets/images/sprites' ) )
});

gulp.task('copySpriteCss', ['createSprite'], function(){
    return gulp.src( './app/temp/sprite/css/*.css' )
        .pipe( rename( '_sprite.css' ) )
        .pipe(  gulp.dest( './app/assets/css/modules') )
});

gulp.task('endClean', ['copySpriteGraphic', 'copySpriteCss'], function(){
    return del(['./app/temp/sprite']);
});

gulp.task('icons', ['beginClean', 'createSprite', 'copySpriteGraphic', 'copySpriteCss', 'endClean']);