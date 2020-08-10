import React from 'react';

export default function Word({ selectedWord, correctLetters }) {
  return (
    <div style={styles.container}>
      {selectedWord.split('').map((letter, i) => {
        return (
          <span style={styles.text} key={i}>
            {letter}
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
  },
  text: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 'x-large',
  },
};
