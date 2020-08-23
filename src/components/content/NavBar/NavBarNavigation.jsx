import React, { useContext, useState } from 'react';
import { AppContext } from '../../../App';
import Button from '../../Button';
import { IoMdArrowDropdown } from 'react-icons/io';

import colors from '../../../config/colors';

export default function NavBarNavigation({}) {
  const {
    goToHomePage,
    goToAboutPage,
    aboutPage,
    goToMediumPage,
    mediumPage,
    goToTickTackToePage,
    tickTackToePage,
    goToRPSPage,
    rpsPage,
    goToHangManPage,
    hangManPage,
    goToContactPage,
    contactPage,
    dropDown,
    setDropDown,
  } = useContext(AppContext);

  const [hover, setHover] = useState(false);

  return (
    <div style={styles.container}>
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
      <div
        style={{
          ...styles.dropDown,
          ...{
            color: hover ? colors.hover[colors.primary] : colors.primary,
          },
        }}
        onClick={() => setDropDown(!dropDown)}
        onMouseOver={() => setHover(!hover)}
        onMouseLeave={() => setHover(!hover)}
      >
        Games
        <div>
          <IoMdArrowDropdown size={20} />
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
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
