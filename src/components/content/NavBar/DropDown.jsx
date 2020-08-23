import React, { useContext, useState } from 'react';
import { AppContext } from '../../../App';
import DropDownButton from './DropDownButton';

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
      <DropDownButton
        title="TickTackToe"
        onClick={goToTickTackToePage}
        page={tickTackToePage}
      />
      <DropDownButton
        title="RPS"
        color={colors.tomato}
        onClick={goToRPSPage}
        page={rpsPage}
      />

      <DropDownButton
        title="RPS"
        color={colors.dark}
        onClick={goToHangManPage}
        page={hangManPage}
      />
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
    // height: 300,
    marginTop: 60,
    right: '5vw',
    backgroundColor: colors.white,
    border: `1px solid ${colors.primary}`,
    borderRadius: 10,
  },
  dropDownButton: {
    cursor: 'pointer',
    fontSize: 'inherit',
    fontWeight: 'bold',
    padding: 10,
    paddingLeft: 20,
  },
};
