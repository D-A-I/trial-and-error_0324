module.exports = {
    // sourcemapを有効にするため、developmentモード
    mode: 'development',
    // エントリポイント
    entry: './src/app.ts',
    // バンドルされ、結果的に出力されるファイル
    output: {
        filename: 'app.js'
    },
    // import時に拡張子が省略されていたとき、探すファイル
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    // sourcemapを有効化する
    devtool: 'source-map',
    // .ts/.tsxはts-loaderによりトランスパイルされる
    module: {
        // loadersは古い記法
        /*
        loaders: [{
            test: /\.tsx?$/,
            loader: 'ts-loader'
        }]
        */
        rules: [{
            test: /\.tsx?$/,
            use: 'ts-loader'
        }]
    }
}