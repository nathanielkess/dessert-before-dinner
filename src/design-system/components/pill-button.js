import React from 'react'

export const PillButton = React.memo(({
  className = '',
  onClick = () => {},
  onClickValue,
  on = false,
  children,
}) => {
  console.log('pill button renders')
  return (
    <button onClick={() => onClick(onClickValue)} className={`whitespace-no-wrap max-w-sm flex items-center rounded-full px-3 py-1 bg-gray-m emphasized ${(on)?'bg-blue-m text-white ':'bg-gray-xl text-blue-m '} ${className}`}>
      {children}
    </button>
  )
})
