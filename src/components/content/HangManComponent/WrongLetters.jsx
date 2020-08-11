import React from 'react';

export default function WrongLetters({ wrongLetters, correctLetters }) {
  return (
    <div style={styles.container}>
      <p style={styles.whiteText}>Wron Letters container</p>
      <p style={styles.guessWordText}>
        {!wrongLetters.length > 0 ? 'No atempts' : wrongLetters}
      </p>
      <p style={styles.guessWordText}>
        {!correctLetters.length > 0 ? 'No atempts' : correctLetters}
      </p>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: '#000',
    width: '100%',
    height: '30vh',
  },
  whiteText: {
    color: '#fff',
  },
  guessWordText: {
    fontWeight: '600',
    fontSize: 'x-large',
  },
};
