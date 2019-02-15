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

module.exports = (env, argv) => {
    console.log("================================");
    console.log(env);
    console.log("++++++++++++++++++++++++++++++++");
    console.log(argv);
    console.log("++++++++++++++++++++++++++++++++");
    console.log(argv.mode);
    console.log("================================");
    if (argv.mode === 'development') {
    }
    if (argv.mode === 'production') {
    }
    return config;
};
