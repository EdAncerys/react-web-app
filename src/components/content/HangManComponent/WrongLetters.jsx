import React from 'react';

export default function WrongLetters({ wrongLetters, correctLetters }) {
  return (
    <div style={styles.container}>
      <h1>{!wrongLetters.length > 0 ? 'No atempts' : wrongLetters}</h1>
      <h1>{correctLetters.length}</h1>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: '#000',
    width: '100%',
    height: '30vh',
  },
};
