const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  chainWebpack : config => {
    config.resolve.alias
      .set('src', path.resolve('src'))
      .set('assets', path.resolve('src/assets'))
  },
  configureWebpack: config => {
    config.plugins.push(new CopyWebpackPlugin([{
      from:path.resolve('static'),
      to: path.resolve('dist/static'),
      ignore: ['index.html', '.DS_Store']
    }]))
  },
  runtimeCompiler: true,
  publicPath: '/',
  outputDir: undefined,
  assetsDir: 'static',
  productionSourceMap: undefined,
  parallel: undefined,
  css:{
    sourceMap: false
  }
}