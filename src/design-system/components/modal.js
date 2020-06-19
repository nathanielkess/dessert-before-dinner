import React, { createRef } from 'react'
import { createPortal } from 'react-dom'
import { Icon } from './icon'
import { useKeyboardEvents } from './../hooks/use-keyboard-events'


export const Modal =  ({
  onClose = () => {},
  children,
  className,
}) => {

  const modalRef = createRef()
  const handleTabbing = (e) => {
    let somethingActive = false;
    const activeElement = document.activeElement
    const tabbables = modalRef.current.querySelectorAll(
      'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select'
    )
    
    tabbables.forEach((node) => {
      if (activeElement.isSameNode(node)) {
        somethingActive = true
      }
    })

    if (!somethingActive) {
      tabbables[0].focus()
      return e.preventDefault()
    }
  }

  useKeyboardEvents(9, handleTabbing)
  useKeyboardEvents(27, onClose)


  return createPortal(
    <div className="bg-black bg-opacity-75 fixed left-0 right-0 bottom-0 top-0 p-10 overflow-y-scroll" role="dialog" aria-modal="true">
      <div ref={modalRef} className={`box-border bg-white rounded-md p-5 pb-10 relative ${className}`}>
        <button onClick={onClose} className="absolute right-0 top-0 mr-3 mt-3" aria-label="close">
          <Icon name="close"/>
        </button>
        {children}
      </div>
    </div>,
    document.body
  )
}