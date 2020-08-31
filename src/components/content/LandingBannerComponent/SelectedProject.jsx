import React, { useState, useContext } from 'react';
import { AppContext } from '../../../App';
import { IoIosArrowDropright } from 'react-icons/io';

import colors from '../../../config/colors';

export default function ProjectItem({ id, title }) {
  const { setSelectedProjectId, mediaQuery } = useContext(AppContext);
  const [hover, setHover] = useState(false);

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        padding: 5,
        width: mediaQuery ? 350 : 'auto',
        cursor: 'pointer',
        borderRadius: 5,
        margin: mediaQuery ? 10 : 5,
        color: colors.white,
        fontSize: mediaQuery ? 20 : 16,
        fontWeight: 600,
        backgroundColor: hover ? colors.electric : colors.secondary,
        transition: '0.8s',
      }}
    >
      <div
        style={{ flex: 1 }}
        onClick={() => setSelectedProjectId(id)}
        onMouseOver={() => setHover(!hover)}
        onMouseLeave={() => setHover(!hover)}
      >
        {title}
      </div>
      <IoIosArrowDropright />
    </div>
  );
}
