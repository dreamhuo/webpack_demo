var path = require("path");

module.exports = {
    entry: ['./src/common.js', './src/page.js'],
    output: {
        path: path.join(__dirname, './public/js'),
        filename: 'base.js'
    }
};