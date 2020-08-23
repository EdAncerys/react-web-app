import React, { useContext, useState } from 'react';
import { AppContext } from '../../../App';

import colors from '../../../config/colors';

export default function DropDown({ props }) {
  const {
    goToTickTackToePage,
    tickTackToePage,
    goToRPSPage,
    rpsPage,
    goToHangManPage,
    hangManPage,
    dropDownHover,
    setDropDownHover,
  } = useContext(AppContext);

  return (
    <div style={styles.container}>
      <div
        style={styles.navigation}
        onClick={goToTickTackToePage}
        onMouseOver={() => setDropDownHover(!dropDownHover)}
        onMouseLeave={() => setDropDownHover(!dropDownHover)}
      >
        tickTackToe
      </div>
      <div>tickTackToe</div>
      <div>tickTackToe</div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    position: 'absolute',
    width: 300,
    height: 300,
    marginTop: 60,
    right: '5vw',
    backgroundColor: colors.white,
    border: `1px solid ${colors.primary}`,
    borderRadius: 20,
  },
  navigation: {
    backgroundColor: colors.tomato,
    padding: 10,
    marginTop: 10,
  },
};
