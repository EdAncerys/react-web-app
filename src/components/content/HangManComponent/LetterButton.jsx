import React, { useState } from 'react';
import colors from '../../../config/colors';

export default function LetterButton({ title, onClick }) {
  const [hover, setHover] = useState(false);

  return (
    <div
      style={{
        ...styles.container,
        ...{
          backgroundColor: hover
            ? colors.hover[colors.primary]
            : colors.primary,
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
    fontSize: 'large',
    padding: 5,
    margin: 10,
    width: 40,
    height: 40,
    borderRadius: '50%',
    color: colors.white,
    cursor: 'pointer',
  },
};
