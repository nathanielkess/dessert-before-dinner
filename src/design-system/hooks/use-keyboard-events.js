import { useEffect } from 'react'

export const useKeyboardEvents = (keyCode, callback, event = 'keydown') => {
  const bindable = (e) => {
    if (e.keyCode === keyCode) {
      callback(e)
    }
  }
  useEffect(() => {
    document.addEventListener(event, bindable);
    return () => { document.removeEventListener(event, bindable)}
  }, [])
  return bindable
}