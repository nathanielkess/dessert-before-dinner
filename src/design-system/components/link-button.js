import React from 'react'
import { Icon } from './icon'
import { colors } from './../styles'

export const LinkButton = ({
  className = '',
  onClick = () => {},
  leftIcon,
  rightIcon,
  children,
}) => (
  <button onClick={onClick} className={`whitespace-no-wrap flex items-center max-w-sm rounded-full py-1 copy-bold ${className}`}>
    { leftIcon && <Icon name={leftIcon} color={colors.blue_m} className="ml-1"></Icon> }
    {children}
    { rightIcon && <Icon name={rightIcon} color={colors.blue_m} className="ml-1"></Icon> }
  </button>
)