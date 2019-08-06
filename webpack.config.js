//webpack potrzebuje ścieżki absolutnej
const path = require('path');

module.exports = {
    entry: './app/assets/scripts/app.js',
    output:  {
        path: path.resolve(__dirname, './app/temp/scripts'),
        filename: 'app.js'
    },
    module: {
        rules: [
            { 
                loader: 'babel-loader', //nazwa loadera
                query: {
                    presets: ['es2015'] //jaki ma być standard?
                },
                test: /\.js$/, //chcę tylko javascriptiowe pliki
                exclude: /node-modules/
            }
        ]
    }

}