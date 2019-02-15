const webpack = require('webpack');
var path = require("path");

var config = {
    mode: 'production',
    entry: {
        common: ['./js/common.js', './js/page.js'],
        page: './js/page.js'
    },
    output: {
        // path: path.join(__dirname, './public/js'),
        // filename: 'base.js'
        filename: '[name].js',
        path: path.join(__dirname, './public/js'),
        publicPath: '/dist/'
    }
};

webpack(config, (err, stats) => {
  if (err || stats.hasErrors()) {
    // 在这里处理错误
    console.log('出错了');
  }
  // 处理完成
    console.log('处理完成');
});