import React, { useState, useEffect } from 'react';

export default function TypingEffect(props) {
  const [text, setText] = useState('');
  const [blockPosition, setBlockPosition] = useState(0);
  const { message } = props;

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (text.length >= message.length) {
        clearInterval(interval);
        return;
      }
      setText((prevText) => prevText + message.charAt(text.length));

      setBlockPosition((text.length + 1) * 10);

      i++;
    }, 40);

    return () => clearInterval(interval);
  }, [message, text]);

  return <p style={{ left: `${blockPosition}px` }}>{text}</p>;
}
