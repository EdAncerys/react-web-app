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
        // boxShadow: `0 6px 16px 0 ${color ? color : colors.light}, 0 3px 6px 0 ${
        //   color ? color : colors.light
        // }`,
        width: '80vw',
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
