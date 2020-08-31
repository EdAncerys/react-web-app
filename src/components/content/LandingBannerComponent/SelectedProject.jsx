import React, { useState, useContext } from 'react';
import { AppContext } from '../../../App';
import { IoIosArrowDropright } from 'react-icons/io';

import colors from '../../../config/colors';

export default function ProjectItem({ id, title }) {
  const { setSelectedProjectId } = useContext(AppContext);
  const [hover, setHover] = useState(false);

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        padding: 5,
        width: 300,
        cursor: 'pointer',
        borderRadius: 5,
        margin: 10,
        color: hover ? colors.white : colors.secondary,
        fontSize: 20,
        fontWeight: 600,
        backgroundColor: hover ? colors.electric : colors.white,
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
