import { useState, useEffect } from 'react'

export default function TypingEffect(props) {
  const [text, setText] = useState('')
  const [blockPosition, setBlockPosition] = useState(0)
  const { message } = props

  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      if (i >= message.length) {
        clearInterval(interval)
        return
      }
      setText((prevText) => prevText + message.charAt(i))

      setBlockPosition((i + 1) * 10)

      i++
    }, 50)

    return () => clearInterval(interval)
  }, [message])

  return <p style={{ left: blockPosition }}>{text}</p>
}
