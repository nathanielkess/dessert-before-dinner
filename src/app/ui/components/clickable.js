import React from 'react';

export const Clickable = ({
  children,
  className = '',
  onClick = () => {},
  ...props
}) => 
  <button onClick={onClick} className={`${className}`} {...props}>{children}</button>