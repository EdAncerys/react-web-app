import React, { useContext } from 'react';
import { HangManContext } from '../../pages/HangMan';
import Button from '../../Button';

import colors from '../../../config/colors';

export default function Notification({}) {
  const { popUp, winner, playNewGame, wrongLetters } = useContext(
    HangManContext
  );

  return (
    <div style={styles.container}>
      {popUp}

      {(winner || wrongLetters.length > 5) && (
        <Button title="New Game" color={colors.danger} onClick={playNewGame} />
      )}
    </div>
  );
}

const styles = {
  container: {
    position: 'absolute',
    width: '90vw',
    maxWidth: 600,
    marginTop: '30vh',
    marginRight: 'auto',
    marginLeft: 'auto',
    left: 0,
    right: 0,
    top: 0,
    textAlign: 'center',
    backgroundColor: colors.secondary,
    color: colors.white,
    padding: 30,
    fontSize: 24,
    fontWeight: 600,
  },
};
