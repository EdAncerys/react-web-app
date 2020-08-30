import React, { useState } from 'react';
import colors from '../../../config/colors';

export default function ProjectItem({ id, title, setSelectedProjectId }) {
  const [hover, setHover] = useState(false);

  return (
    <div style={styles.container}>
      <div
        style={{ color: hover ? colors.light : colors.white, fontSize: 20 }}
        onClick={() => console.log(id)}
        onMouseOver={() => setHover(!hover)}
        onMouseLeave={() => setHover(!hover)}
      >
        {title}
      </div>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: colors.primary,
    cursor: 'pointer',
  },
};
