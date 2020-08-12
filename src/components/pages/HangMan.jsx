import React, { useState, useEffect } from 'react';
import Figure from '../content/HangManComponent/Figure';
import Word from '../content/HangManComponent/Word';
import wordList from '../content/HangManComponent/wordList';
import WrongLetters from '../content/HangManComponent/WrongLetters';

import { useMediaQuery } from '../content/MediaGueries';

export default function HangMan() {
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [playable, setPlayable] = useState(true);
  const [winner, setWinner] = useState();
  const [gameWins, setGameWins] = useState(0);
  const [gameLoose, setGameLoose] = useState(0);
  const [selectedWord, setSelectedWord] = useState('');
  const [newWord, setNewWord] = useState(true);
  const [popUp, setPopUp] = useState(false);

  const isRowBased = useMediaQuery('(min-width: 600px)');

  useEffect(() => {
    const gameWords = wordList;
    setSelectedWord(gameWords[Math.floor(Math.random() * gameWords.length)]);
  }, [newWord]);

  // Save state to local storage
  const LOCAL_STORAGE_KEY = 'EdAncerys.HangMan';
  const timeSaved = new Date().getTime();

  const saveToLocalStorage = {
    timeSaved: timeSaved,
    correctLetters: correctLetters,
    wrongLetters: wrongLetters,
    playable: playable,
    winner: winner,
    gameWins: gameWins,
    gameLoose: gameLoose,
    selectedWord: selectedWord,
  };

  const validateLocalStorage = () => {
    const hours = 1;
    const savedToJSON = localStorage.getItem(LOCAL_STORAGE_KEY);
    const savedTimeToJSON = JSON.parse(savedToJSON).timeSaved;
    if (new Date().getTime() - savedTimeToJSON > hours * 60 * 60 * 1000)
      return false;
    else return true;
  };

  useEffect(() => {
    const savedToJSON = localStorage.getItem(LOCAL_STORAGE_KEY);

    if (savedToJSON != null && validateLocalStorage()) {
      setCorrectLetters(JSON.parse(savedToJSON).correctLetters);
      setWrongLetters(JSON.parse(savedToJSON).wrongLetters);
      setPlayable(JSON.parse(savedToJSON).playable);
      setWinner(JSON.parse(savedToJSON).winner);
      setGameWins(JSON.parse(savedToJSON).gameWins);
      setGameLoose(JSON.parse(savedToJSON).gameLoose);
      setSelectedWord(JSON.parse(savedToJSON).selectedWord);
    } else localStorage.clear();
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(saveToLocalStorage));
  }, [saveToLocalStorage]);

  const playNewGame = () => {
    playAgain();
    setGameWins(0);
    setGameLoose(0);
  };

  const playAgain = () => {
    setNewWord(!newWord);
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

  const handleNotification = (message) => {
    setPopUp(message);
    setTimeout(() => {
      setPopUp(false);
    }, 2000);
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
            handleNotification('You have already entered this letter');
          }
        } else {
          if (playable && !wrongLetters.includes(letter)) {
            setWrongLetters([...wrongLetters, letter]);
          } else {
            handleNotification('You have already entered this letter');
          }
        }
      }
    };
    window.addEventListener('keydown', handleKeydown);

    handlePlayable();

    return () => window.removeEventListener('keydown', handleKeydown);
  }, [handlePlayable, playable, selectedWord, wrongLetters, correctLetters]);

  return (
    <div style={styles.pageContainer}>
      <div style={styles.pageContent}>
        <div style={styles.headerContainer}>
          <p style={styles.mainText}>Welcome To The Hang Man Game</p>
          {popUp && (
            <div style={styles.popUpContainer}>
              <p style={styles.popUpText}>{popUp}</p>
            </div>
          )}
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
  popUpText: {
    color: '#000',
    justifySelf: 'center',
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
  popUpContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    position: 'absolute',
    right: 0,
    left: 0,
    margin: 'auto',
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
  sideContainer: (isRowBased) => ({
    gridColumn: isRowBased ? '3/5' : '1/5',
    justifySelf: 'center',
  }),
};
