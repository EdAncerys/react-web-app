import React from 'react';

export default function WrongLetters({ wrongLetters, winner, correctLetters }) {
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
      <p style={styles.mainText} onClick={prompt}>
        Wrong Letters Guessed
      </p>
      <p style={styles.infoText}>Type a Letter To Start</p>
      {!winner && (
        <React.Fragment>
          <p style={styles.mainText}>
            {!wrongLetters.length > 0 && correctLetters.length > 0
              ? 'Looking Good...'
              : handleWrongLetters(wrongLetters)}
          </p>
          {wrongLetters.length > 0 && (
            <p style={{ ...styles.mainText, ...styles.whiteText }}>
              {`You have ${6 - wrongLetters.length} attempts left`}
            </p>
          )}
        </React.Fragment>
      )}
      {winner && (
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
      )}
    </div>
  );
}

const styles = {
  container: {
    width: '100%',
  },
  whiteText: {
    color: '#fff',
  },
  mainText: {
    color: '#546677',
    fontSize: 'large',
    fontWeight: '600',
  },
  infoText: {
    color: '#fff',
    fontSize: 'large',
    fontWeight: '600',
  },
};
