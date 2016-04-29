var path = require('path');

module.exports = {
    entry: [
      'webpack/hot/dev-server',
      'webpack-dev-server/client?http://localhost:8080',
       path.resolve(__dirname, 'public/js/component/index.jsx')
    ],
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js',
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
             {
                test: /\.(jsx|es6)$/,
                loader: "babel-loader",
                query: {
                    presets: ['es2015','react']
                }
             }
        ]
    }
};