import { withA11y } from '@storybook/addon-a11y'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import { addDecorator } from '@storybook/react'
import { addParameters } from '@storybook/react'

// addon-console を追加した場合は読み込む
import '@storybook/addon-console'

addDecorator(withA11y)

addParameters({
  doc: {
    inlineStories: true,
    iframeHeight: '60px',
  },
  // addon-viewport を追加した場合は設定
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
})
