import React from 'react'
import { Icon } from './../components/icon'

export default {
  title: 'Icons',
}

export const Icons = () => {
  return (
    <div>
      <Icon name="arrow-left" size={28} />
      <Icon name="arrow-right" size={28} />
      <Icon name="check" size={28} />
      <Icon name="close" size={28} />
    </div>
  )
}