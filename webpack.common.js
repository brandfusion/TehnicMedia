const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
  entry: {
    app: './_src/app.js'
  },
  module: {
    rules: [
      {
        test: /\.less$/i,
        use: [
          // Creates `style` nodes from JS strings
          MiniCssExtractPlugin.loader,
          // Translates CSS into CommonJS
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              url: false
            }
          },
          {
            loader: 'postcss-loader',           
          },
          {
            loader: 'less-loader',
            options: {},
          },
        ],
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env']
            ],
            plugins: ['@babel/plugin-transform-runtime']
          }
        }
      }
    ],
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve("./Templates/Designs/TTonlineNew", 'dist2'),
  },
  plugins: [
    new MiniCssExtractPlugin({      
      filename: '[name].bundle.css',
      chunkFilename: '[id].css',
    }),
  ]
};