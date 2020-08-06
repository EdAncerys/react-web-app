import React, { Component } from 'react';
import { Navbar, NavDropdown, Button } from 'react-bootstrap';

export default class Header extends Component {
  render() {
    return (
      <Navbar sticky="top" className="navbar-home">
        <Navbar.Brand>
          <span onClick={this.props.goToHomePage} className="logo">
            Ed Ancerys
          </span>
        </Navbar.Brand>
        <div className="navbar-right">
          <Button
            onClick={this.props.goToAboutPage}
            className="btn btn-danger"
            variant="danger"
          >
            {this.props.aboutPage ? 'Home' : 'About'}
          </Button>

          <NavDropdown title="More" className="nav-dropdown">
            <NavDropdown.Item
              className="btn-nav-black"
              onClick={this.props.goToMediumPage}
            >
              {this.props.mediumPage ? 'Home' : 'Medium'}
            </NavDropdown.Item>
            <NavDropdown.Item
              className="btn-nav-lemon"
              onClick={this.props.goToTickTackToePage}
            >
              {' '}
              {this.props.tickTackToePage ? 'Home' : 'TickTackToe'}
            </NavDropdown.Item>
            <NavDropdown.Item
              className="btn-nav-danger"
              onClick={this.props.goToRPSPage}
            >
              {' '}
              {this.props.rpsPage ? 'Home' : 'RPS'}
            </NavDropdown.Item>

            <NavDropdown.Divider />
            <NavDropdown.Item
              className="btn-nav-blue"
              onClick={this.props.goToContactPage}
            >
              {this.props.contactPage ? 'Home' : 'Contact'}
            </NavDropdown.Item>
          </NavDropdown>
        </div>
      </Navbar>
    );
  }
}
