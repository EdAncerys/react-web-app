import React from 'react';

export default function Word({ selectedWord, correctLetters, game }) {
  return (
    <div style={styles.container}>
      <p style={styles.mainText}>Guess The Word</p>

      {selectedWord.split('').map((letter, i) => {
        return (
          <span style={styles.mainText} key={i}>
            {correctLetters.includes(letter) ? letter : '_'}
          </span>
        );
      })}
      {game > 0 && <p style={styles.whiteText}>{`You won ${game} games`}</p>}
    </div>
  );
}

const styles = {
  container: {
    width: '100%',
    height: '30vh',
  },
  whiteText: {
    color: '#fff',
  },
  mainText: {
    color: '#546677',
    fontSize: 'large',
    fontWeight: '600',
  },
};
