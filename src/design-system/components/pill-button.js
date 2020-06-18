import React from 'react'

export const PillButton = ({
  className = '',
  onClick = () => {},
  on = false,
  children,
}) => (
  <button onClick={onClick} className={`whitespace-no-wrap max-w-sm flex items-center rounded-full px-3 py-1 bg-gray-m emphasized ${(on)?'bg-blue-m text-white ':'bg-gray-xl text-blue-m '} ${className}`}>
    {children}
  </button>
)