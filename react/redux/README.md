#  webpack搭建react + es6开发环境

## 利用babel将es6转化为es5，需要安装的依赖
```bash   
   $ npm install babel-loader babel-preset-es2015 babel-preset-react react react-dom webpack webpack-dev-server
```
## 添加babel配置，.babelrc文件下添加
```js
   { 
    "presets": ["es2015","react"] 
   }
```
## webpack配置  
```js
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
```

## 运行
   在package.json文件的scripts添加
```js
  {"dev": "webpack-dev-server --devtool eval --progress --colors --hot --content-base public"}
```
   运行npm run dev
