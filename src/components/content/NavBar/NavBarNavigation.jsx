import React, { useContext, useState } from 'react';
import { AppContext } from '../../../App';

import Button from '../../Button';
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io';
import { BsList } from 'react-icons/bs';

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
    mediaQuery,
  } = useContext(AppContext);

  return (
    <div style={styles.container}>
      <div style={styles.wrapper}>
        {mediaQuery && (
          <>
            <Button
              title={aboutPage ? 'Home' : 'About'}
              color={colors.danger}
              solid={false}
              onClick={goToAboutPage}
            />
            <Button
              title={mediumPage ? 'Home' : 'Medium'}
              color={colors.black}
              onClick={goToMediumPage}
            />
            <Button
              title={contactPage ? 'Home' : 'Contact'}
              color={colors.yellow}
              onClick={goToContactPage}
            />
          </>
        )}
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
          {!mediaQuery && <BsList size={30} />}
          {mediaQuery && (
            <div>
              Games
              {!dropDown && <IoMdArrowDropdown size={20} />}
              {dropDown && <IoMdArrowDropup size={20} />}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'grid',
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: {
    display: 'flex',
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
