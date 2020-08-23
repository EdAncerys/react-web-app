import React, { useContext, useState } from 'react';
import { AppContext } from '../../../App';
import DropDownButton from './DropDownButton';

import colors from '../../../config/colors';

export default function DropDown({ props }) {
  const {
    goToAboutPage,
    aboutPage,
    goToMediumPage,
    mediumPage,
    goToContactPage,
    contactPage,
    goToTickTackToePage,
    tickTackToePage,
    goToRPSPage,
    rpsPage,
    goToHangManPage,
    hangManPage,
    dropDownHover,
    mediaQuery,
    setDropDown,
    dropDown,
  } = useContext(AppContext);

  return (
    <div
      style={{
        ...styles.container,
        ...{
          border: `1px solid ${dropDownHover ? dropDownHover : colors.primary}`,
          width: 300,
          marginTop: 80,
          right: '5vw',
          borderRadius: 10,
        },
      }}
      onMouseLeave={() => setDropDown(!dropDown)}
    >
      {!mediaQuery && (
        <div>
          <DropDownButton
            title="About"
            color={colors.danger}
            onClick={goToAboutPage}
            page={aboutPage}
          />
          <DropDownButton
            title="Medium"
            color={colors.black}
            onClick={goToMediumPage}
            page={mediumPage}
          />
          <DropDownButton
            title="Contact"
            color={colors.yellow}
            onClick={goToContactPage}
            page={contactPage}
          />
        </div>
      )}
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
    backgroundColor: colors.white,
  },
  dropDownButton: {
    cursor: 'pointer',
    fontSize: 'inherit',
    fontWeight: 'bold',
    padding: 10,
    paddingLeft: 20,
  },
};
