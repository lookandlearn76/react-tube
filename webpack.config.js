var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: "/",
    filename: "bundle.js"
  },
  module: {
  loaders: [
    {
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015', 'stage-0']
      },
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/
    }
  ]
},

  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
  //  historyApiFallback: true,
    contentBase: './'
  }
};
