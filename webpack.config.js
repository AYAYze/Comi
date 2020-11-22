//const NodemonPlugin = require("nodemon-webpack-plugin");
const nodeExternals = require("webpack-node-externals");

module.exports = {
    entry : `${__dirname}/scripts/index.js`,
    output:{
        path: `${__dirname}/scripts/dist`,
        filename: 'content.js'
    },
    resolve:{
        extensions: ['.ts','.js']
    },
    module : {
    },
    externals: [nodeExternals()]
}