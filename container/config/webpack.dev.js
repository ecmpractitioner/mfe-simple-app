const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require("./webpack.common");
const webpackDependencies = require('../package.json');

const devConfig = {
  mode: "development",
  devServer: {
    port: 8080,
    historyApiFallback: {
      index: "index.html",
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      name:'container',
      remotes:{
        'marketing':'marketing@http://localhost:8081/remoteEntry.js',
      },
      //shared:['react','react-dom'], this is one way of sharing dependencies across multiple MFE's. The other way around is shown below
      shared:webpackDependencies.dependencies, //this will ensure that we don't have to make changes every time we add new shared dependencies.
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};

module.exports=merge(commonConfig,devConfig);
