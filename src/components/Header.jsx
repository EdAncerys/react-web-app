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
          <Button
            onClick={this.props.goToContactPage}
            className="btn btn-blue"
            variant="light"
          >
            {this.props.contactPage ? 'Home' : 'Contact'}
          </Button>
          <Button
            onClick={this.props.goToMediumPage}
            className="btn btn-black"
            variant="light"
          >
            {this.props.mediumPage ? 'Home' : 'Medium'}
          </Button>
          <Button
            onClick={this.props.goToTickTackToePage}
            className="btn btn-lemon"
            variant="light"
          >
            {this.props.tickTackToePage ? 'Home' : 'TickTackToe'}
          </Button>
        </div>
        <NavDropdown title="More" id="nav-dropdown">
          <NavDropdown.Item onClick={this.props.goToMediumPage}>
            {this.props.mediumPage ? 'Home' : 'Medium'}
          </NavDropdown.Item>
          <NavDropdown.Item onClick={this.props.goToTickTackToePage}>
            {' '}
            {this.props.tickTackToePage ? 'Home' : 'TickTackToe'}
          </NavDropdown.Item>

          <NavDropdown.Divider />
          <NavDropdown.Item onClick={this.props.goToContactPage}>
            {this.props.contactPage ? 'Home' : 'Contact'}
          </NavDropdown.Item>
        </NavDropdown>
      </Navbar>
    );
  }
}
