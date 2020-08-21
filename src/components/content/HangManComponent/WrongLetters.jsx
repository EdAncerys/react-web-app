import React, { useContext } from 'react';
import { HangManContext } from '../../pages/HangMan';
import colors from '../../../config/colors';

export default function WrongLetters({}) {
  const { wrongLetters, winner, correctLetters } = useContext(HangManContext);

  const handleWrongLetters = (wrongLetters) => {
    return wrongLetters
      .map((letter, i) => <span key={i}>{letter}</span>)
      .reduce(
        (prev, curr) => (prev === null ? [curr] : [prev, ', ', curr]),
        null
      );
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>Wrong Letters Guessed</div>
      <div style={styles.content}>
        <div style={styles.text}>{handleWrongLetters(wrongLetters)}</div>
      </div>
      <div style={styles.footer}>
        <div style={styles.footerText}>
          {`You have ${6 - wrongLetters.length} attempts left`}
        </div>
      </div>

      {/* {winner && (
        <React.Fragment>
          <p style={styles.whiteText}>
            Congratulations! You won!{' '}
            <span role="img" aria-label="happy face">
              😃
            </span>
          </p>
        </React.Fragment>
      )}
      {wrongLetters.length > 5 && (
        <React.Fragment>
          <p style={styles.whiteText}>
            Unfortunately you lost.{' '}
            <span role="img" aria-label="sad face">
              😕
            </span>
          </p>
        </React.Fragment>
      )} */}
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
    color: colors.danger,
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
