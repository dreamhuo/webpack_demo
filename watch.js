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

const compiler = webpack(config);

const watching = compiler.watch({
  // watchOptions 示例
  aggregateTimeout: 300,
  poll: undefined
}, (err, stats) => {
    // 配置错误
    if (err) {
        console.error(err.stack || err);
        if (err.details) {
            console.error(err.details);
        }
        return;
    }
    const info = stats.toJson();
    // 编译错误
    if (stats.hasErrors()) {
        console.error(info.errors);
    }
    // 编译警告
    if (stats.hasWarnings()) {
        console.warn(info.warnings);
    }
    // 显示编译信息
    console.log(stats.toString({
        chunks: false,  // 使构建过程更静默无输出
        colors: true    // 在控制台展示颜色
    }));
    // 处理完成
    console.log('watch处理完成');
});
