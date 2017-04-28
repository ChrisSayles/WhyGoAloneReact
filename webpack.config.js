module.exports = {
  entry: {
    "bundle": ['./src/index.js'],
  },
  output: {
    path: __dirname + "/public",
    publicPath: '/',
    filename: "[name].js" 
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};
