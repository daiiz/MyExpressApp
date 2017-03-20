var webpack = require('webpack');

module.exports = {
  /* ビルドの起点となるファイルの設定 */
  entry: {
    formapp: './clientjs/formapp/app.jsx',
    album: './clientjs/album/app.jsx'
  },

  /* 出力されるファイルの設定 */
  output: {
    path: './public/js', // 出力先のパス
    filename: '[name].bundle.js' // 出力先のファイル名
  },

  plugins:[
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ],

  module: {

    /* loaderの設定 */
    loaders: [
      {
        test: /\.js[x]$/, // 対象となるファイルの拡張子（正規表現可）
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          cacheDirectory: true,
          presets: ['react', 'es2015']
        }
      }
    ]
  }
};