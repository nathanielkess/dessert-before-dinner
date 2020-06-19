import React, { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { Icon } from './icon'

const escapeEvent = (callBack) => (e) => {
  if (e.keyCode === 27) {
    callBack();
  }
}

export const Modal =  ({
  onClose = () => {},
  children,
  className,
}) => {


 useEffect(() => {
  const escapeClicked = escapeEvent(onClose); 
  document.addEventListener('keydown', escapeClicked);
  return () => { document.removeEventListener(escapeClicked); }
 })

  return createPortal(
    <div className="bg-black bg-opacity-75 fixed left-0 right-0 bottom-0 top-0 p-10" role="dialog" aria-modal="true">
      <div className={`box-border bg-white rounded-md p-5 relative ${className}`}>
        <button onClick={onClose} className="absolute right-0 top-0 mr-3 mt-3" aria-label="close">
          <Icon name="close"/>
        </button>
        {children}
      </div>
    </div>,
    document.body
  )
}