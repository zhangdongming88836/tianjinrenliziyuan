'use strict'
const path = require('path')
const utils = require('./utils')
const config = require('../config')
const vueLoaderConfig = require('./vue-loader.conf')
const HappyPack = require('happypack')
const os = require('os')
const cpus = os.cpus().length
const happyThreadPool = HappyPack.ThreadPool({size: cpus})
const generateAssetAppConfig  = require('./generate-asset.config.js')

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

const createLintingRule = () => ({
  test: /\.(js|vue)$/,
  loader: 'eslint-loader',
  enforce: 'pre',
  include: [resolve('src'), resolve('test')],
  options: {
    formatter: require('eslint-friendly-formatter'),
    emitWarning: !config.dev.showEslintErrorsInOverlay
  }
})

module.exports = {
  context: path.resolve(__dirname, '../'),
  entry: {
    app: ["babel-polyfill", "./src/main.js"],
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      '@': resolve('src'),
      'vue$': 'vue/dist/vue.esm.js',
      'vue': 'vue/dist/vue.esm.js',
      '@lib': resolve('/src/libs'),
      '@util': resolve('/src/utils'),
      '@actions': resolve('/src/actions'),
      '@static': resolve('/static'),
      '@controller': resolve('/src/actions/controller.js'),
    }
  },
  plugins: [
    generateAssetAppConfig(),
    new HappyPack({
      id: 'babel',
      threads: cpus,
      loaders: ['babel-loader?cacheDirectory'],
      threadPool: happyThreadPool
    }),
    new HappyPack({
      id: 'vue',
      threads: cpus,
      loaders: [{
        loader: 'vue-loader',
        options: vueLoaderConfig
      }],
      // 使用共享进程池中的进程处理任务
      threadPool: happyThreadPool,
    }),

  ],
  module: {
    rules: [
      // ...(config.dev.useEslint ? [createLintingRule()] : []),
      {
        test: /\.vue$/,
        use: 'happypack/loader?id=vue',
        include: [resolve('src')]
      },
      {
        test: /\.js$/,
        loader: 'happypack/loader?id=babel',
        include: [resolve('src'), resolve('test'), resolve('node_modules/webpack-dev-server/client')]
      },
      {
        test: /\.svg$/,
        loader:  'svg-sprite-loader',
        include: [resolve('src/icons')],
        options: {
          symbolId: 'icon-[name]'
        }
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        exclude: [resolve('src/icons')],
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]'),
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  node: {
    // prevent webpack from injecting useless setImmediate polyfill because Vue
    // source contains it (although only uses it if it's native).
    setImmediate: false,
    // prevent webpack from injecting mocks to Node native modules
    // that does not make sense for the client
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  }
}
