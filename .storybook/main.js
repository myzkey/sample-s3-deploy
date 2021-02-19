// eslint-disable-next-line @typescript-eslint/no-var-requires
const custom = require('./webpack.config.js')
module.exports = {
  stories: ['../components/**/*.stories.(js|jsx|mdx|tsx|ts)'],
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-actions',
    '@storybook/addon-backgrounds',
    '@storybook/addon-knobs',
    '@storybook/addon-links',
    '@storybook/addon-notes',
    '@storybook/addon-options',
    '@storybook/addon-storysource',
    '@storybook/addon-viewport',
  ],
  webpackFinal: (config) => custom({ config }),
}
