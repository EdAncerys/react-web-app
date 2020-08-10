import React, { useState } from 'react';

export default function HangMan() {
  const [onHover, setOnHover] = useState(false);

  const toggleHover = () => {
    setOnHover(!onHover);
    console.log('hello');
  };

  return (
    <div style={styles.page}>
      <h1
        style={!onHover ? styles.mainText : styles.textOnHover}
        onMouseEnter={toggleHover}
        onMouseLeave={toggleHover}
      >
        This is a Hang Man Game Page
      </h1>
    </div>
  );
}

const styles = {
  page: {
    minHeight: '80vh',
    width: '100vw',
    backgroundColor: 'gray',
  },
  mainText: {
    color: '#fff',
  },
  textOnHover: {
    color: 'tomato',
  },
};
