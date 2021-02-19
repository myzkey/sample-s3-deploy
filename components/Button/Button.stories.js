import React from 'react'
import Button from './index'

export default {
  title: 'Button',
  component: Button,
}

export const ToStorybook = () => {
  return (
    <Button
      label="適用"
      onClick={() => {
        window.alert('OK')
      }}
    />
  )
}

ToStorybook.story = {
  name: 'to Storybook',
}
