import React from 'react'

export default {
  title: 'Color',
}

const ColorCard = ({ className, children }) => (
  <div className={`font-sans px-5 flex flex-1 items-center justify-center content-center h-16 m-2 rounded ${className}`}>
   {children}
  </div>
)

export const Colors = () => (
  <div>
    <ColorCard className="bg-black text-white">black</ColorCard>
    <ColorCard className="bg-gray-m">gray-m</ColorCard>
    <ColorCard className="bg-gray-l">gray-l</ColorCard>
    <ColorCard className="bg-gray-xl">gray-xl</ColorCard>
    <ColorCard className="bg-gray-xxl">gray-xxl</ColorCard>
    <ColorCard className="bg-blue-xxl">blue-m</ColorCard>
    <ColorCard className="bg-salmon-m">blue-m</ColorCard>
  </div>
)
