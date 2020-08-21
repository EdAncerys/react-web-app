import React from 'react';
import LetterButton from './LetterButton';

export default function Keyboard({ props }) {
  return (
    <div style={styles.container}>
      <div>
        <LetterButton title="a" />
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
  },
};
