import React from 'react';

export default function Word({ selectedWord, correctLetters }) {
  return (
    <div style={styles.container}>
      <p style={styles.whiteText}>Word container</p>
      {selectedWord} {correctLetters} <br />
      {selectedWord.split('').map((letter, i) => {
        return (
          <span
            style={{ ...styles.guessWordText, ...styles.whiteText }}
            key={i}
          >
            {correctLetters.includes(letter) ? letter : '_'}
          </span>
        );
      })}
    </div>
  );
}

const styles = {
  container: {
    width: '100%',
    height: 200,
    backgroundColor: 'blue',
  },
  whiteText: {
    color: '#fff',
  },
  guessWordText: {
    fontWeight: '600',
    fontSize: 'x-large',
  },
};
