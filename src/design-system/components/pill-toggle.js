import React from 'react'
import { Icon } from './icon'
import { colors } from './../styles'

export const PillToggle = ({
  className = '',
  onClick = () => {},
  on = false,
  children,
}) => (
  <button onClick={onClick} className={`whitespace-no-wrap flex items-center max-w-sm rounded-full px-3 py-1 bg-gray-m emphasized ${(on)?'bg-blue-m text-white ':'bg-gray-xl text-blue-m '} ${className}`}>
    {children}
    <Icon name="check" color={on ? colors.white : colors.blue_m} className="ml-2"></Icon>
  </button>
)