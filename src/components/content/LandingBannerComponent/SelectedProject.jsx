import React, { useState, useContext } from 'react';
import { AppContext } from '../../../App';
import { BiFolder } from 'react-icons/bi';

import colors from '../../../config/colors';

export default function ProjectItem({ id, title }) {
  const { setSelectedProjectId } = useContext(AppContext);
  const [hover, setHover] = useState(false);

  return (
    <div style={styles.container}>
      <div
        style={{
          color: hover ? colors.electric : colors.white,
          fontSize: 20,
          transition: '0.5s',
        }}
        onClick={() => setSelectedProjectId(id)}
        onMouseOver={() => setHover(!hover)}
        onMouseLeave={() => setHover(!hover)}
      >
        {title}
        <BiFolder style={{ marginLeft: 10 }} />
      </div>
    </div>
  );
}

const styles = {
  container: {
    cursor: 'pointer',
    margin: 10,
  },
};
