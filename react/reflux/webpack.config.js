var path = require('path');

module.exports = {
    entry: [
      'webpack/hot/dev-server',
      'webpack-dev-server/client?http://localhost:8080',
       path.resolve(__dirname, 'public/js/component/index.jsx')
    ],
    output: {
        path: path.resolve(__dirname),
        filename: 'bundle.js',
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
              test: /\.jsx?$/, 
              loaders: ['jsx?harmony']
            }
        ]
    }
}    