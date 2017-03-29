var webpack = require('webpack');

module.exports = {
  entry: [
    './static/js/index.js',
    './static/styl/main.styl'
  ],
  output: {
    path: __dirname + '/static/build',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.styl$/,
        exclude: /node_modules/,
        loader: 'style-loader!css-loader!autoprefixer-loader!stylus-loader'
      },
      {
        test: /\.(eot|woff|woff2|ttf|png|jpg|otf|mp4|ico)$/,
        exclude: /node_modules/,
        loader: 'url-loader?limit=30000&name=static/fonts/[name].[ext]'
      },
      {
        test: /\.svg?$/,
        exclude: /node_modules/,
        loader: 'babel-loader?presets[]=es2015,presets[]=react!react-svg-loader'
      }
    ]
  }
};
