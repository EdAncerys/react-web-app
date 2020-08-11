import React, { useState, useEffect } from 'react';
import Figure from '../content/HangManComponent/Figure';
import Word from '../content/HangManComponent/Word';
import WrongLetters from '../content/HangManComponent/WrongLetters';

export default function HangMan() {
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [onHover, setOnHover] = useState(false);
  const [playable, setPlayable] = useState(true);
  const [winner, setWinner] = useState();
  const [game, setGame] = useState(0);

  const gameWords = ['hello', 'world'];
  const selectedWord1 = gameWords[Math.floor(Math.random() * gameWords.length)];
  const selectedWord = 'hello';
  const toggleHover = () => {
    setOnHover(!onHover);
  };

  useEffect(() => {
    const handleKeydown = (event) => {
      const { key, keyCode } = event;
      const letter = key.toLowerCase();

      if (keyCode >= 65 && keyCode <= 90) {
        if (playable && selectedWord.includes(letter)) {
          if (!correctLetters.includes(letter)) {
            setCorrectLetters([...correctLetters, letter]);
          } else {
            // show(setShowNotification);
            console.log(`No letter ${letter}`);
          }
        } else if (playable) {
          if (!wrongLetters.includes(letter)) {
            setWrongLetters([...wrongLetters, letter]);
          } else {
            // show(setShowNotification);
            console.log(`Letter not correct ${letter}`);
          }
        }
      }
    };
    window.addEventListener('keydown', handleKeydown);

    if (
      selectedWord.split('').every((letter) => correctLetters.includes(letter))
    ) {
      setPlayable(false);
      setWinner(true);
      setGame(game + 1);
    } else if (wrongLetters.length > 5) {
      setPlayable(false);
      setWinner(false);
    }
    return () => window.removeEventListener('keydown', handleKeydown);
  }, [correctLetters, wrongLetters, playable]);

  return (
    <div style={styles.page}>
      <h1
        style={!onHover ? styles.mainText : styles.textOnHover}
        onMouseEnter={toggleHover}
        onMouseLeave={toggleHover}
      >
        Welcome To The Hang Man Game
        {playable}
      </h1>

      <Figure wrongLetters={wrongLetters} />
      <WrongLetters wrongLetters={wrongLetters} winner={winner} />
      <Word
        selectedWord={selectedWord}
        correctLetters={correctLetters}
        wrongLetters={wrongLetters}
        game={game}
      />
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
