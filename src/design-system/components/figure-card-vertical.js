import React from 'react'
import { ImageBox } from './image-box'

export const FigureCardVertical = ({
  className = '',
  title,
  children,
  src,
}) => (
  <figure className={`flex flex-col items-center ${className}`}>
    <ImageBox src={src} />
    <figcaption className="mt-3">
      <h2 className="copy-bold text-blue-m mb-3">{title}</h2>
      {children}
    </figcaption>
  </figure>
)