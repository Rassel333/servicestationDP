var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');
var path= require('path');
//var node_dir = __dirname + '/node_modules';

module.exports = {
  devtool: 'eval-source-map',
  entry: './src/index.jsx',
  output: {
    path: './dist',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel' },
      //{ test: /\.scss$/, loader: 'style!css!sass' },
      
      
      { test: /bootstrap\/js\//, loader: 'imports?jQuery=jquery' },

      // Needed for the css-loader when [bootstrap-webpack](https://github.com/bline/bootstrap-webpack)
      // loads bootstrap's css.
     { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,   loader: "url?limit=10000&minetype=application/font-woff" },
     { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,   loader: "url?limit=10000&minetype=application/font-woff" },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&minetype=application/octet-stream" },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,    loader: "file" },
      { test: /\.(png|jpg|jpeg|gif|svg)$/i, loaders: ['file?name=[name].[ext]'] },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&minetype=image/svg+xml" },
      { test: /vendor\/.+\.(jsx|js)$/, loader: 'imports?jQuery=jquery,$=jquery,this=>window'},
      { test: require.resolve("jquery"), loader: "imports?jQuery=jquery" },
      { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader")}
     
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
   /* alias: {
            'jquery': node_dir + '/jquery/dist/jquery.js'
          }*/
  },
  devServer: {
    contentBase: "./dist",
    colors: true,
    historyApiFallback: true,
    inline: true,
    hot: true
  },
  plugins: [
    new ExtractTextPlugin("bundle.css", {
            allChunks: true}),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "windows.jQuery": "jquery"
        })
    
  ]
};