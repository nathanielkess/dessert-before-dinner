import React from 'react'

export const ImageBox = ({
  className = '',
  size,
  src,
}) => (
  <div className={`bg-gray-xxl flex flex-shrink-0 inline-block border-4 border-gray-xl rounded-md box-border p-5 ${className}`} style={{ width: 240, height: 240 }}>
    <img src={src} className="object-contain" />
  </div>
)