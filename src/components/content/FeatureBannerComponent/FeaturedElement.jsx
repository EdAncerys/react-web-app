import React from 'react';
import colors from '../../../config/colors';

export default function FeaturedElement({ src, text = 'Default Text', color }) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        width: '80vw',
        maxWidth: 1000,
        backgroundColor: color,
        overflow: 'hidden',
      }}
    >
      <div
        style={{
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
          }}
          alt={src}
          src={src}
        />
      )}
    </div>
  );
}
