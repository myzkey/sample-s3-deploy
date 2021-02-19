/* eslint-disable
    @typescript-eslint/no-var-requires,
    @typescript-eslint/explicit-function-return-type
*/

const { resolve } = require('path')
const webpack = require('webpack')

module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve('babel-loader'),
    options: {
      presets: [require.resolve('babel-preset-react-app')],
      plugins: [require.resolve('@babel/plugin-proposal-class-properties')],
    },
  })

  config.resolve.extensions.push('.ts', '.tsx')

  config.resolve.alias['~/storybook'] = resolve(__dirname, './')
  config.resolve.alias['~'] = resolve(__dirname, './')

  // for rewire setting
  config.optimization['moduleIds'] = 'named'
  config.plugins.concat([
    new webpack.HotModuleReplacementPlugin(),
    new (require('rewiremock/webpack/plugin'))(),
  ])
  // for rewire setting end

  return config
}
