import React, { useContext } from 'react';
import { HangManContext } from '../../pages/HangMan';

import { FiCloudLightning } from 'react-icons/fi';
import { IconContext } from 'react-icons';

import colors from '../../../config/colors';

export default function Word({}) {
  const { selectedWord, correctLetters, gameWins, gameLoose } = useContext(
    HangManContext
  );

  return (
    <div style={styles.container}>
      <div style={styles.header}>Guess The Word</div>
      <div style={styles.content}>
        {selectedWord.split('').map((letter, i) => {
          return (
            <div style={styles.text} key={i}>
              {correctLetters.includes(letter) ? (
                letter
              ) : (
                <FiCloudLightning size={20} color={colors.danger} />
              )}
            </div>
          );
        })}
      </div>
      <div style={styles.footer}>
        <div style={styles.footerText}>Wins {gameWins}</div>
        <div style={styles.footerText}>Lost {gameLoose}</div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'grid',
    justifyContent: 'center',
  },
  header: {
    display: 'grid',
    justifyContent: 'center',
    color: colors.primary,
    fontSize: 24,
    fontWeight: 800,
    margin: 10,
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  text: {
    color: colors.secondary,
    fontSize: 20,
    fontWeight: '600',
    margin: 5,
  },
  footer: {
    display: 'flex',
    justifyContent: 'center',
  },
  footerText: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.secondary,
    margin: 10,
  },
};
