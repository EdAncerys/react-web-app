import React, { useState, useEffect } from 'react';
import Figure from '../content/HangManComponent/Figure';
import Word from '../content/HangManComponent/Word';
import wordList from '../content/HangManComponent/wordList';
import WrongLetters from '../content/HangManComponent/WrongLetters';

import { useMediaQuery } from '../../hooks/useMediaQuery';
import Button from '../Button';
import Keyboard from '../content/HangManComponent/Keyboard';
import Notification from '../content/HangManComponent/Notification';

import colors from '../../config/colors';

export const HangManContext = React.createContext();

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

  useEffect(() => {
    if (winner) handleNotification('Congratulations! You won!');
    if (wrongLetters.length > 5) handleNotification('Unfortunately you lost.');
  }, [winner, wrongLetters]);

  const handleNotification = (message) => {
    setPopUp(message);
    setTimeout(() => {
      setPopUp(false);
    }, 1000);
  };

  // On Key Press
  useEffect(() => {
    const handleKeydown = (event) => {
      const { key, keyCode } = event;
      const letter = key.toLowerCase();

      if (keyCode >= 65 && keyCode <= 90) {
        handleLetterInput(letter);
      }
    };
    window.addEventListener('keydown', handleKeydown);

    handlePlayable();

    return () => window.removeEventListener('keydown', handleKeydown);
  }, [handlePlayable, playable, selectedWord, wrongLetters, correctLetters]);

  // On Screen Keyboard
  const handleKeyboard = (e) => {
    const letter = e.target.title;
    handleLetterInput(letter);
  };

  const handleLetterInput = (letter) => {
    if (playable && selectedWord.includes(letter)) {
      if (!correctLetters.includes(letter)) {
        setCorrectLetters([...correctLetters, letter]);
      } else {
        if (playable)
          handleNotification('You have already entered this letter');
      }
    } else {
      if (playable && !wrongLetters.includes(letter)) {
        setWrongLetters([...wrongLetters, letter]);
      } else {
        if (playable)
          handleNotification('You have already entered this letter');
      }
    }
  };

  return (
    <HangManContext.Provider
      value={{
        popUp,
        wrongLetters,
        handleKeyboard,
        isRowBased,
        selectedWord,
        correctLetters,
        gameWins,
        gameLoose,
      }}
    >
      <div
        style={{
          ...styles.container,
          ...{ alignItems: !isRowBased ? 'start' : 'center' },
        }}
      >
        <div
          style={{ ...styles.content, ...{ gridGap: !isRowBased ? 5 : 30 } }}
        >
          {popUp && (
            <div style={styles.notification}>
              <Notification />
            </div>
          )}
          <div style={styles.figure}>
            <Figure />
          </div>
          <div style={styles.word}>
            <Word />
          </div>
          <div style={styles.wrongLetters}>
            <WrongLetters />
          </div>
          <div style={styles.keyboard}>
            <Keyboard />
          </div>
          <div style={styles.footer}>
            <div style={{ display: 'flex' }}>
              <Button
                title="Start Again"
                color={colors.danger}
                onClick={playAgain}
              />
              <Button
                title="New Game"
                color={colors.black}
                onClick={playNewGame}
              />
            </div>
          </div>
        </div>
      </div>
    </HangManContext.Provider>
  );
}

const styles = {
  container: {
    display: 'grid',
    width: '100vw',
    height: '80vh',
    backgroundColor: colors.light,
    justifyContent: 'center',
    overflow: 'scroll',
  },
  content: {
    display: 'grid',
    gridTemplateAreas: " 'a a b b' 'a a c c ' 'e e e e' 'd d d d' ",
    gridTemplateRows: 'auto auto auto auto',
    width: '90vw',
    height: '60vh',
    justifyContent: 'center',
    alignItems: 'center',
  },
  notification: {
    gridArea: 'a',
  },
  figure: {
    gridArea: 'a',
    display: 'grid',
    justifySelf: 'center',
    alignItems: 'center',
  },
  word: {
    alignSelf: 'start',
    gridArea: 'b',
  },
  wrongLetters: {
    alignSelf: 'start',
    gridArea: 'c',
  },
  keyboard: {
    display: 'grid',
    justifySelf: 'center',
    alignSelf: 'start',
    gridArea: 'e',
    width: '100vw',
  },
  footer: {
    alignSelf: 'end',
    display: 'grid',
    gridArea: 'd',
    justifySelf: 'center',
  },
};
