import React from 'react'
import { ImageBox } from './image-box'

export const FigureCard = ({
  className = '',
  title,
  children,
  src,
}) => (
  <figure className={`flex flex-row ${className}`}>
    <ImageBox src={src} alt="title" />
    <figcaption className="ml-8">
      <h2 className="heading-2 text-blue-m mb-3">{title}</h2>
      {children}
    </figcaption>
  </figure>
)