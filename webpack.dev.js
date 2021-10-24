const path = require( 'path' );
const { merge } = require( 'webpack-merge' );
const common = require( './webpack.common' );

module.exports = merge( common, {
  mode: 'development',
  output: {
    path: path.join( __dirname, 'dist' ),
    filename: 'main.js'
  }
})