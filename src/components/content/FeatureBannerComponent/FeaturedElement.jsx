import React from 'react';
import colors from '../../../config/colors';

export default function FeaturedElement({
  src,
  text = 'Default Text',
  color,
  reverse = false,
  onClick,
}) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20,
        border: `1px solid ${color ? color : colors.light}`,
        borderRadius: 20,
        maxWidth: 1000,
        backgroundColor: color,
        overflow: 'hidden',
        cursor: 'pointer',
      }}
      onClick={onClick}
    >
      <div
        style={{
          order: reverse ? 1 : 0,
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
