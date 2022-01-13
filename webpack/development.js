const path = require('path');

module.exports = {
  target: 'web',
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname, '../', 'build'),
    publicPath: '/',
    filename: 'js/[name].bundle.js',
    assetModuleFilename: 'images/[name].[ext][query]',
  },
  devServer: {
    open: true,
    hot: true,
    static: path.resolve(__dirname, '../', 'public'),
  },
  module: {
    rules: [
      {
        test: /\.(sass|scss)$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [],
};
