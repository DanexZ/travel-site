//webpack potrzebuje ścieżki absolutnej
const path = require('path');

module.exports = {
    entry: {
        app: './app/assets/scripts/app.js',
        vendor: './app/assets/scripts/vendor.js'
    },
    output:  {
        path: path.resolve(__dirname, './app/temp/scripts'),
        filename: '[name].js'
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