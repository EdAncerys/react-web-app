import React, { useContext } from 'react';
import { Navbar, NavDropdown, Button } from 'react-bootstrap';
import { AppContext } from '../App';

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
  } = useContext(AppContext);

  return (
    <div style={styles.container}>
      <Navbar sticky="top" className="navbar-home">
        <Navbar.Brand>
          <span onClick={goToHomePage} className="logo">
            Ed Ancerys
          </span>
        </Navbar.Brand>
        <div className="navbar-right">
          <Button
            onClick={goToAboutPage}
            className="btn btn-danger"
            variant="danger"
          >
            {aboutPage ? 'Home' : 'About'}
          </Button>

          <NavDropdown title="More">
            <NavDropdown.Item
              className="btn-nav-black"
              onClick={goToMediumPage}
            >
              {mediumPage ? 'Home' : 'Medium'}
            </NavDropdown.Item>
            <NavDropdown.Item
              className="btn-nav-lemon"
              onClick={goToTickTackToePage}
            >
              {' '}
              {tickTackToePage ? 'Home' : 'TickTackToe'}
            </NavDropdown.Item>
            <NavDropdown.Item className="btn-nav-danger" onClick={goToRPSPage}>
              {' '}
              {rpsPage ? 'Home' : 'RPS'}
            </NavDropdown.Item>
            <NavDropdown.Item
              className="btn-nav-gray"
              onClick={goToHangManPage}
            >
              {' '}
              {hangManPage ? 'Home' : 'Hang Man'}
            </NavDropdown.Item>

            <NavDropdown.Divider />
            <NavDropdown.Item
              className="btn-nav-blue"
              onClick={goToContactPage}
            >
              {contactPage ? 'Home' : 'Contact'}
            </NavDropdown.Item>
          </NavDropdown>
        </div>
      </Navbar>
    </div>
  );
}

const styles = {
  container: {},
};
