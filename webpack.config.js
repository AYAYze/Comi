//const NodemonPlugin = require("nodemon-webpack-plugin");
const nodeExternals = require("webpack-node-externals");

module.exports = {
    entry : { 
        content: `${__dirname}/scripts/index.ts`,
        background : `${__dirname}/scripts/background.ts`
    },
    output:{
        path: `${__dirname}/scripts/dist`,
        filename: '[name].js'
    },
    resolve:{
        extensions: ['.ts','.js']
    },
    module: {
        rules: [
          {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
          },
        ],
    },
    node: { __dirname:false },
    devtool: 'cheap-module-source-map',
    externals: [nodeExternals()]
}