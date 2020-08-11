import React, { useState, useEffect } from 'react';
import Figure from '../content/HangManComponent/Figure';
import Word from '../content/HangManComponent/Word';

export default function HangMan() {
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [onHover, setOnHover] = useState(false);

  const gameWords = ['rock', 'paper', 'scissors'];
  const selectedWord = gameWords[Math.floor(Math.random() * gameWords.length)];

  const toggleHover = () => {
    setOnHover(!onHover);
  };

  useEffect(() => {
    const handleKeydown = (event) => {
      const { key, keyCode } = event;
      if (keyCode >= 65 && keyCode <= 90) {
        const letter = key.toLowerCase();
        if (selectedWord.includes(letter)) {
          if (!correctLetters.includes(letter)) {
            setCorrectLetters((currentLetters) => [...currentLetters, letter]);
          } else {
            // show(setShowNotification);
            console.log(`No letter ${letter}`);
          }
        } else {
          if (!wrongLetters.includes(letter)) {
            setWrongLetters((currentLetters) => [...currentLetters, letter]);
          } else {
            // show(setShowNotification);
            console.log(`Letter not correct ${letter}`);
          }
        }
      }
    };
    window.addEventListener('keydown', handleKeydown);

    return () => window.removeEventListener('keydown', handleKeydown);
  }, [correctLetters, wrongLetters]);

  return (
    <div style={styles.page}>
      <h1
        style={!onHover ? styles.mainText : styles.textOnHover}
        onMouseEnter={toggleHover}
        onMouseLeave={toggleHover}
      >
        This is a Hang Man Game Page
      </h1>
      <Figure wrongLetters={wrongLetters} />
      <Word selectedWord={selectedWord} correctLetters={correctLetters} />
    </div>
  );
}

const styles = {
  page: {
    minHeight: '80vh',
    width: '100vw',
    backgroundColor: 'gray',
  },
  mainText: {
    color: '#fff',
  },
  textOnHover: {
    color: 'tomato',
  },
};
