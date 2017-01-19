module.exports = {
  entry: './app/app.jsx',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: { //adding modules
      Main:'app/components/main.jsx',
      Nav : 'app/components/Nav.jsx',
      Weather:"app/components/Weather.jsx",
      About:"app/components/About.jsx",
      Example:"app/components/Example.jsx",
      WeatherMessage:"app/components/WeatherMessage.jsx",
      WeatherForm:"app/components/WeatherForm.jsx"
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  }
};
