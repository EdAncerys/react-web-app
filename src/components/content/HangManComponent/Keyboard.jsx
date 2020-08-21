import React, { useState, useContext } from 'react';
import LetterButton from './LetterButton';
import Button from '../../Button';

import { HangManContext } from '../../pages/HangMan';

export default function Keyboard({ props }) {
  const { handleKeyboard } = useContext(HangManContext);

  const [toggle, setToggle] = useState(true);

  return (
    <div style={styles.container}>
      {!toggle && (
        <Button title="Show Keyboard" onClick={() => setToggle(!toggle)} />
      )}
      {toggle && (
        <>
          <div style={{ display: 'flex' }}>
            <LetterButton title="q" onClick={(e) => handleKeyboard(e)} />
            <LetterButton title="w" />
            <LetterButton title="e" />
            <LetterButton title="r" />
            <LetterButton title="t" />
            <LetterButton title="y" />
            <LetterButton title="u" />
            <LetterButton title="i" />
            <LetterButton title="o" />
            <LetterButton title="p" />
          </div>
          <div style={{ display: 'flex' }}>
            <LetterButton title="a" />
            <LetterButton title="s" />
            <LetterButton title="d" />
            <LetterButton title="f" />
            <LetterButton title="g" />
            <LetterButton title="h" />
            <LetterButton title="j" />
            <LetterButton title="k" />
            <LetterButton title="l" />
          </div>
          <div style={{ display: 'flex' }}>
            <LetterButton title="z" />
            <LetterButton title="x" />
            <LetterButton title="c" />
            <LetterButton title="v" />
            <LetterButton title="b" />
            <LetterButton title="n" />
            <LetterButton title="m" />
            <Button title="Hide" onClick={() => setToggle(!toggle)} />
          </div>
        </>
      )}
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
};
