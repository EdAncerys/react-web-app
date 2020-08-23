import React, { useContext, useState } from 'react';
// import { Navbar, NavDropdown, Button } from 'react-bootstrap';
import { AppContext } from '../App';
import NavBarNavigation from './content/NavBar/NavBarNavigation';

import colors from '../config/colors';

export default function Header({ props }) {
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

  return (
    // <div style={styles.container}>
    //   <Navbar sticky="top" className="navbar-home">
    //     <Navbar.Brand>
    //       <span onClick={goToHomePage} className="logo">
    //         Ed Ancerys
    //       </span>
    //     </Navbar.Brand>
    //     <div className="navbar-right">
    //       <NavDropdown title="More">
    //         <NavDropdown.Item
    //           className="btn-nav-black"
    //           onClick={goToMediumPage}
    //         >
    //           {mediumPage ? 'Home' : 'Medium'}
    //         </NavDropdown.Item>
    //         <NavDropdown.Item
    //           className="btn-nav-lemon"
    //           onClick={goToTickTackToePage}
    //         >
    //           {' '}
    //           {tickTackToePage ? 'Home' : 'TickTackToe'}
    //         </NavDropdown.Item>
    //         <NavDropdown.Item className="btn-nav-danger" onClick={goToRPSPage}>
    //           {' '}
    //           {rpsPage ? 'Home' : 'RPS'}
    //         </NavDropdown.Item>
    //         <NavDropdown.Item
    //           className="btn-nav-gray"
    //           onClick={goToHangManPage}
    //         >
    //           {' '}
    //           {hangManPage ? 'Home' : 'Hang Man'}
    //         </NavDropdown.Item>

    //         <NavDropdown.Divider />
    //         <NavDropdown.Item
    //           className="btn-nav-blue"
    //           onClick={goToContactPage}
    //         >
    //           {contactPage ? 'Home' : 'Contact'}
    //         </NavDropdown.Item>
    //       </NavDropdown>
    //     </div>
    //   </Navbar>
    // </div>
    <div style={styles.container}>
      <div style={styles.navigation}>
        <div style={styles.logo} className="logo" onClick={goToHomePage}>
          Ed Ancerys
        </div>
        <NavBarNavigation />
      </div>
      {dropDown && <div style={styles.dropDown}></div>}
    </div>
  );
}

const styles = {
  container: {
    position: 'sticky',
    top: 0,
    backgroundColor: colors.white,
  },
  logo: {
    fontSize: 30,
    color: colors.dark,
    flex: 1,
  },
  navigation: {
    display: 'flex',
    alignItems: 'center',
    width: '100vw',
  },
  dropDown: {
    position: 'absolute',
    width: 400,
    height: 400,
    marginTop: 10,
    backgroundColor: colors.white,
  },
};
