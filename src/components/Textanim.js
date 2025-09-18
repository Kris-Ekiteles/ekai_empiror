import React, { useEffect, useState } from 'react';
import './Textanim.css'; // We’ll define CSS below

const Typewriter = ({ words, typingSpeed = 150, deletingSpeed = 80, pause = 1500 }) => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentWord = words[wordIndex % words.length];

    let timeout;

    if (isDeleting) {
      timeout = setTimeout(() => {
        setText(currentWord.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, deletingSpeed);

      if (charIndex === 0) {
        setIsDeleting(false);
        setWordIndex(prev => (prev + 1) % words.length);
      }
    } else {
      timeout = setTimeout(() => {
        setText(currentWord.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, typingSpeed);

      if (charIndex === currentWord.length) {
        setTimeout(() => setIsDeleting(true), pause);
      }
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, charIndex, wordIndex, words, typingSpeed, deletingSpeed, pause]);

  return (
    <span className="typewriter">
      {text}
      <span className="cursor" />
    </span>
  );
};

export default Typewriter;
