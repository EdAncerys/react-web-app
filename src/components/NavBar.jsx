import React, { useContext } from 'react';
import { AppContext } from '../App';
import NavBarNavigation from './content/NavBar/NavBarNavigation';
import DropDown from '../components/content/NavBar/DropDown';

import colors from '../config/colors';

export default function Header({ props }) {
  const { goToHomePage, dropDown } = useContext(AppContext);

  return (
    <div style={styles.container}>
      <div style={styles.navigation}>
        <div style={styles.logo} className="logo" onClick={goToHomePage}>
          Ed Ancerys
        </div>
        <NavBarNavigation />
      </div>
      {dropDown && <DropDown />}
    </div>
  );
}

const styles = {
  container: {
    display: 'grid',
    position: 'sticky',
    top: 0,
    width: '100vw',
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
  logo: {
    fontSize: 30,
    color: colors.dark,
    flex: 1,
  },
  navigation: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    width: '90vw',
  },
};
