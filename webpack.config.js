const path = require('path');
const FileManagerPlugin = require('filemanager-webpack-plugin');

module.exports = {
  plugins: [
    new FileManagerPlugin({
      events:{
        onEnd: {
            copy: [
                {source: './dist/client*.*', destination: './public/'}
            ],
        },
      }
    }),
],
  mode: 'development',
  entry:{
    client: {import: './src/client/index.tsx', filename: './[name].bundle.js' },
    server: {import: './src/server/index.tsx', filename: './[name].bundle.js' }
  } 
  ,
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
    ],
  },
  resolve: {
    extensions:['.tsx', ',ts', '.js']
  },
  // ,
  // output: {
  //   filename: '[name].js',
  //   path: path.resolve(__dirname, './dist')   
  // },

  }
