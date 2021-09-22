const GenerateAssetPlugin = require('generate-asset-webpack-plugin');
const config = require('../config/app-config');

function createServerConfig(compilation){
  return JSON.stringify(
    Object.assign({
      _hash: compilation.hash
    },config)
  )
}

module.exports = () =>{
  return new GenerateAssetPlugin({
    filename: 'config/app-config.json',
    fn: (compilation, cb) => {
      cb(null, createServerConfig(compilation));
    }
  })
}
