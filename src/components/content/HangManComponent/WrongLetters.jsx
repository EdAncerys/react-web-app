import React from 'react';

export default function WrongLetters({ wrongLetters, winner, game }) {
  const handleMessage = () => {
    let textPrint;
    if (!wrongLetters.length > 0) textPrint = wrongLetters;
    else textPrint = 'Looking Promising...';
    return textPrint;
  };

  return (
    <div style={styles.container}>
      <p style={styles.whiteText}>Wrong Letters Guessed</p>
      {!winner && (
        <React.Fragment>
          <p style={styles.guessWordText}>
            {!wrongLetters.length > 0 ? 'Have No Wrong Attempts' : wrongLetters}
          </p>
          {wrongLetters.length > 0 && (
            <p style={styles.guessWordText}>
              {`You have ${6 - wrongLetters.length} attempts left`}
            </p>
          )}
        </React.Fragment>
      )}
      {winner && (
        <React.Fragment>
          <p style={styles.whiteText}>You Won!</p>
        </React.Fragment>
      )}
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
