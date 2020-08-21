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
            <LetterButton title="w" onClick={(e) => handleKeyboard(e)} />
            <LetterButton title="e" onClick={(e) => handleKeyboard(e)} />
            <LetterButton title="r" onClick={(e) => handleKeyboard(e)} />
            <LetterButton title="t" onClick={(e) => handleKeyboard(e)} />
            <LetterButton title="y" onClick={(e) => handleKeyboard(e)} />
            <LetterButton title="u" onClick={(e) => handleKeyboard(e)} />
            <LetterButton title="i" onClick={(e) => handleKeyboard(e)} />
            <LetterButton title="o" onClick={(e) => handleKeyboard(e)} />
            <LetterButton title="p" onClick={(e) => handleKeyboard(e)} />
          </div>
          <div style={{ display: 'flex' }}>
            <LetterButton title="a" onClick={(e) => handleKeyboard(e)} />
            <LetterButton title="s" onClick={(e) => handleKeyboard(e)} />
            <LetterButton title="d" onClick={(e) => handleKeyboard(e)} />
            <LetterButton title="f" onClick={(e) => handleKeyboard(e)} />
            <LetterButton title="g" onClick={(e) => handleKeyboard(e)} />
            <LetterButton title="h" onClick={(e) => handleKeyboard(e)} />
            <LetterButton title="j" onClick={(e) => handleKeyboard(e)} />
            <LetterButton title="k" onClick={(e) => handleKeyboard(e)} />
            <LetterButton title="l" onClick={(e) => handleKeyboard(e)} />
          </div>
          <div style={{ display: 'flex' }}>
            <LetterButton title="z" onClick={(e) => handleKeyboard(e)} />
            <LetterButton title="x" onClick={(e) => handleKeyboard(e)} />
            <LetterButton title="c" onClick={(e) => handleKeyboard(e)} />
            <LetterButton title="v" onClick={(e) => handleKeyboard(e)} />
            <LetterButton title="b" onClick={(e) => handleKeyboard(e)} />
            <LetterButton title="n" onClick={(e) => handleKeyboard(e)} />
            <LetterButton title="m" onClick={(e) => handleKeyboard(e)} />
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
