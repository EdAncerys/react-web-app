import React, { useContext, useState } from 'react';
import { AppContext } from '../../../App';

import Button from '../../Button';
import { FcMenu } from 'react-icons/fc';

import colors from '../../../config/colors';

export default function NavBarNavigation({}) {
  const {
    goToAboutPage,
    aboutPage,
    goToMediumPage,
    mediumPage,
    goToContactPage,
    contactPage,
    dropDown,
    setDropDown,
    dropDownHover,
    setDropDownHover,
  } = useContext(AppContext);

  return (
    <div style={styles.container}>
      <div
        style={{
          ...styles.dropDown,
          ...{
            color: dropDownHover ? dropDownHover : colors.primary,
          },
        }}
        onClick={() => setDropDown(!dropDown)}
        onMouseOver={() => {
          setDropDownHover(!dropDownHover);
          setDropDown(!dropDown);
        }}
        onMouseLeave={() => setDropDownHover(!dropDownHover)}
      >
        <FcMenu size={30} />
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  dropDown: {
    display: 'flex',
    justifyContent: 'center',
    fontWeight: 'bold',
    fontSize: 'inherit',
    borderRadius: 20,
    padding: 5,
    paddingLeft: 20,
    paddingRight: 20,
    margin: 10,
    cursor: 'pointer',
  },
};
