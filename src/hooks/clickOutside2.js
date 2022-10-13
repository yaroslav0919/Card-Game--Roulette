import { useEffect } from 'react'

export default function useOnClickOutside (ref, handler) {
  useEffect(
    () => {
      const listener = event => {
        const el = document.getElementsByClassName('auto-game')[0]

        if (!ref.current || ref.current.contains(event.target) || el.contains(event.target)) {
          return
        }
        handler(event)
      }

      document.addEventListener('mousedown', listener)
      document.addEventListener('click', listener)

      return () => {
        document.removeEventListener('mousedown', listener)
        document.removeEventListener('click', listener)
      }
    },
    [ref, handler]
  )
}
