import React, { useState } from 'react';
import Figure from '../content/HangManComponent/Figure';
import Word from '../content/HangManComponent/Word';

export default function HangMan() {
  const [onHover, setOnHover] = useState(false);

  const toggleHover = () => {
    setOnHover(!onHover);
  };

  const gameWords = ['rock', 'paper', 'scissors'];
  const selectedWord = gameWords[Math.floor(Math.random() * gameWords.length)];

  return (
    <div style={styles.page}>
      <h1
        style={!onHover ? styles.mainText : styles.textOnHover}
        onMouseEnter={toggleHover}
        onMouseLeave={toggleHover}
      >
        This is a Hang Man Game Page
      </h1>
      <Figure />
      <Word selectedWord={selectedWord} />
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
