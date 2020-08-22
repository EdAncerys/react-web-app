import React, { useState, useContext } from 'react';
import { HangManContext } from '../../pages/HangMan';

import colors from '../../../config/colors';

export default function LetterButton({ title, onClick }) {
  const { isRowBased } = useContext(HangManContext);
  const [hover, setHover] = useState(false);

  return (
    <div
      title={title}
      style={{
        ...styles.container,
        ...{
          backgroundColor: hover
            ? colors.hover[colors.primary]
            : colors.primary,
          fontSize: !isRowBased ? 'small' : 'large',
          padding: 5,
          margin: 5,
          width: !isRowBased ? 30 : 40,
          height: !isRowBased ? 30 : 40,
        },
      }}
      onClick={onClick}
      onMouseOver={() => setHover(!hover)}
      onMouseLeave={() => setHover(!hover)}
    >
      {title}
    </div>
  );
}

const styles = {
  container: {
    display: 'grid',
    justifyContent: 'center',
    alignItems: 'center',
    textTransform: 'uppercase',
    borderRadius: '50%',
    color: colors.white,
    cursor: 'pointer',
  },
};
