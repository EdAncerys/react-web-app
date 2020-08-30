import React, { useState } from 'react';

import colors from '../config/colors';

export default function Button({
  title = 'Title',
  color = colors.primary,
  href,
}) {
  const [hover, setHover] = useState(false);

  const hoverColor = colors.hover[color];

  return (
    <a
      style={{
        color: hover ? hoverColor : color,
        fontWeight: 'bold',
        fontSize: 'inherit',
        textDecoration: 'none',
        cursor: 'pointer',
      }}
      onMouseOver={() => setHover(!hover)}
      onMouseLeave={() => setHover(!hover)}
      target="blank"
      href={href}
    >
      {title}{' '}
    </a>
  );
}
