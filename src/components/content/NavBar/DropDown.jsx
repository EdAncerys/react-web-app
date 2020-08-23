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
  } = useContext(AppContext);

  return (
    <div
      style={{
        ...styles.container,
        ...{
          border: `1px solid ${dropDownHover ? dropDownHover : colors.primary}`,
        },
      }}
    >
      <DropDownButton
        title="TickTackToe"
        color={colors.secondary}
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
        title="Hang Man"
        color={colors.electric}
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
    marginTop: 60,
    right: '5vw',
    backgroundColor: colors.white,
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
