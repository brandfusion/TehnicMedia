const {merge} = require('webpack-merge');
const common = require('./webpack.common.js');
const TerserJSPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const WebpackConcatPlugin = require("webpack-concat-files-plugin");
const terser = require("terser");
module.exports = merge(common, {
  mode: 'production',  
  watch: true,
  optimization: {
    minimizer: [new TerserJSPlugin({})],
  },  
  plugins: [
    new CleanWebpackPlugin(),
    // new WebpackConcatPlugin({
    //   bundles: [
    //     {
    //       src: ["Files/Templates/Designs/Rapido/js/source/*.js",
    //         "Files/Templates/Designs/Rapido/js/custom.js"
    //       ],
    //       dest: './Files/Templates/Designs/Rapido/dist/vendor.min.js',
    //       transforms: {
    //         after: async (code) => {
    //           const minifiedCode = await terser.minify(code);
    //           return minifiedCode.code;
    //         },
    //       },
    //     },
    //   ],
    // }),
  ],
});