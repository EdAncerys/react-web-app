import React, { useContext } from 'react';
import { AppContext } from '../../../App';

import colors from '../../../config/colors';

export default function FeaturedElement({
  src,
  text = 'Default Text',
  color,
  reverse = false,
  onClick,
}) {
  const { mediaQuery } = useContext(AppContext);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: mediaQuery ? 'row' : 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: mediaQuery ? 20 : 0,
        marginBottom: mediaQuery ? 20 : 0,
        border: `1px solid ${color ? color : colors.light}`,
        borderRadius: mediaQuery ? 20 : 0,
        maxWidth: 1000,
        backgroundColor: color,
        overflow: 'hidden',
        cursor: 'pointer',
      }}
      onClick={onClick}
    >
      <div
        style={{
          order: mediaQuery ? (reverse ? 1 : 0) : 1,
          margin: 20,
          flex: 1,
          fontWeight: 'bold',
          fontSize: 'inherit',
          textAlign: 'justify',
          color: color ? colors.white : colors.medium,
        }}
      >
        {text}
      </div>
      {src && (
        <img
          style={{
            height: 250,
            margin: 20,
          }}
          alt={src}
          src={src}
        />
      )}
    </div>
  );
}
