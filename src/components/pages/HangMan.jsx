import React, { useState, useEffect } from 'react';
import Figure from '../content/HangManComponent/Figure';
import Word from '../content/HangManComponent/Word';
import WrongLetters from '../content/HangManComponent/WrongLetters';

import { useMediaQuery } from '../content/MediaGueries';

export default function HangMan() {
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [playable, setPlayable] = useState(true);
  const [winner, setWinner] = useState();
  const [gameWins, setGameWins] = useState(0);
  const [gameLoose, setGameLoose] = useState(0);

  const isRowBased = useMediaQuery('(min-width: 600px)');

  const gameWords = ['hello', 'world'];
  const selectedWord1 = gameWords[Math.floor(Math.random() * gameWords.length)];
  const selectedWord = 'hello';

  const playNewGame = () => {
    playAgain();
    setGameWins(0);
    setGameLoose(0);
  };

  const playAgain = () => {
    setWinner();
    setCorrectLetters([]);
    setWrongLetters([]);
    setPlayable(true);
  };

  const handlePlayable = () => {
    if (
      playable &&
      selectedWord.split('').every((letter) => correctLetters.includes(letter))
    ) {
      setPlayable(false);
      setWinner(true);
      setGameWins(gameWins + 1);
    }
    if (playable && wrongLetters.length > 5) {
      setPlayable(false);
      setWinner(false);
      setGameLoose(gameLoose + 1);
    }
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
            console.log(`No letter ${letter}`);
          }
        } else {
          if (playable && !wrongLetters.includes(letter)) {
            setWrongLetters([...wrongLetters, letter]);
          } else {
            console.log(`Letter not correct ${letter}`);
          }
        }
      }
    };
    window.addEventListener('keydown', handleKeydown);

    handlePlayable();

    return () => window.removeEventListener('keydown', handleKeydown);
  }, [correctLetters, playable ? wrongLetters : '']);

  return (
    <div style={styles.pageContainer}>
      <div style={styles.pageContent}>
        <div style={styles.headerContainer}>
          <p style={styles.mainText}>Welcome To The Hang Man Game</p>
        </div>
        <div style={styles.figureContainer(isRowBased)}>
          <Figure wrongLetters={wrongLetters} playable={playable} />
        </div>
        <div style={styles.sideContainer(isRowBased)}>
          <WrongLetters
            wrongLetters={wrongLetters}
            winner={winner}
            correctLetters={correctLetters}
          />
          <Word
            selectedWord={selectedWord}
            correctLetters={correctLetters}
            wrongLetters={wrongLetters}
            gameWins={gameWins}
            gameLoose={gameLoose}
          />
        </div>
        <div style={styles.headerContainer}>
          <div onClick={playAgain} className="btn btn-danger" variant="danger">
            Start Again
          </div>
          <div onClick={playNewGame} className="btn btn-black" variant="danger">
            New Game
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  mainText: {
    color: '#546677',
    fontSize: 'x-large',
    fontWeight: '600',
    textAlign: 'center',
  },
  headerContainer: {
    gridColumn: '1/5',
    justifySelf: 'center',
    margin: 20,
  },
  pageContainer: {
    display: 'grid',
    backgroundColor: 'hsl(0, 0%, 75%)',
    width: '100vw',
  },
  pageContent: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
    gridTemplateRows: 'auto auto auto',
    gridGap: '1rem',
    minHeight: '80vh',
    maxWidth: 800,
    padding: '5vw',
    justifySelf: 'center',
  },
  figureContainer: (isRowBased) => ({
    gridColumn: isRowBased ? '1/3' : '1/5',
    paddingRight: '1rem',
    justifySelf: 'center',
  }),
  textOnHover: {
    color: 'tomato',
  },
  sideContainer: (isRowBased) => ({
    gridColumn: isRowBased ? '3/5' : '1/5',
    justifySelf: 'center',
  }),
};
