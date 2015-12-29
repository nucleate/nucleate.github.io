import path from 'path'
import makeWebpackConfig from 'nucleate/lib/makeWebpackConfig'
import CleanPlugin from 'clean-webpack-plugin'
import ExtractTextPlugin from 'extract-text-webpack-plugin'

const SRC_DIR = path.resolve(__dirname, 'src')
const config = makeWebpackConfig({ srcDir: SRC_DIR })

export default {
  ...config,
  entry: './src/index.js',
  module: {
    ...config.module,
    loaders: [
      ...config.module.loaders,
      // Transpile ES2015 / JSX via babel
      {
        test: /\.jsx?$/,
        include: SRC_DIR,
        loader: 'babel-loader'
      },
      // Extract css/scss
      {
        test: /\.(css|scss)$/,
        loader: ExtractTextPlugin.extract(
          'css-loader?sourceMap' +
          '!sass-loader?sourceMap'
        )
      },
      // Extract sass files
      {
        test: /\.sass$/,
        loader: ExtractTextPlugin.extract(
          'css-loader?sourceMap' +
          '!sass-loader?sourceMap&indentedSyntax=true'
        )
      },
      {
        test: /\.(gif|jpg|jpeg|png|svg|eot|ttf|woff2?)/,
        loader: 'file-loader'
      }
    ]
  },
  plugins: [
    ...config.plugins,
    // Clear build folder for each build
    new CleanPlugin(['build']),
    // Extract css to [name].css
    new ExtractTextPlugin('[name].css')
  ],
  'markdown-it': {
    preset: 'default'
  }
}
