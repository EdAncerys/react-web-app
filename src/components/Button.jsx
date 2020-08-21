import React, { useState } from 'react';

import colors from '../config/colors';

export default function Button({
  title = 'Title',
  color = colors.primary,
  solid = true,
  hoverColor = colors.secondary,
}) {
  const [hover, setHover] = useState(false);

  const btnTextColor = solid ? colors.white : color;
  const btnBackgroundColor = solid ? color : '';

  return (
    <div
      style={{
        display: 'grid',
        justifyContent: 'center',
        alignItems: 'center',
        color: hover ? colors.white : btnTextColor,
        backgroundColor: hover ? hoverColor : btnBackgroundColor,
        border: `1px solid ${hover ? hoverColor : color}`,
        borderRadius: 20,
        fontWeight: 'bold',
        fontSize: 'inherit',
        padding: 5,
        paddingLeft: 20,
        paddingRight: 20,
        margin: 10,
        cursor: 'pointer',
      }}
      onMouseOver={() => setHover(!hover)}
      onMouseLeave={() => setHover(!hover)}
    >
      {title}
    </div>
  );
}
