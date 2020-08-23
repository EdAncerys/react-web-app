import React from 'react';

import colors from '../../../config/colors';

export default function DropDown({ props }) {
  return (
    <div style={styles.container}>
      {/* <div style={styles.dropDown}></div> */}
    </div>
  );
}

const styles = {
  container: {
    position: 'absolute',
    width: 300,
    height: 300,
    marginTop: 60,
    right: '5vw',
    backgroundColor: colors.white,
    border: `1px solid ${colors.primary}`,
    borderRadius: 20,
  },
};
