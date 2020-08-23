import React, { useContext, useState } from 'react';
import { AppContext } from '../../../App';
import DropDownButton from './DropDownButton';
import { AiOutlineClose } from 'react-icons/ai';

import colors from '../../../config/colors';

export default function DropDown({ props }) {
  const {
    goToHomePage,
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
          position: mediaQuery ? 'absolute' : 'relative',
          marginTop: mediaQuery ? 80 : 0,
          border: mediaQuery
            ? `1px solid ${dropDownHover ? dropDownHover : colors.primary}`
            : '',
          width: mediaQuery ? 300 : '90vw',
          height: mediaQuery ? '' : '100vh',
          right: mediaQuery ? '5vw' : '',
          borderRadius: mediaQuery ? 10 : '',
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
    backgroundColor: colors.white,
  },
  dropDownButton: {
    cursor: 'pointer',
    fontSize: 'inherit',
    fontWeight: 'bold',
    padding: 10,
    paddingLeft: 20,
  },
  logo: {
    fontSize: 28,
    color: colors.dark,
    flex: 1,
  },
};
