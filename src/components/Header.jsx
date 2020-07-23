import React, { Component } from 'react';
import { Navbar, Button } from 'react-bootstrap';

export default class Header extends Component {
  render() {
    return (
      <Navbar sticky="top" className="navbar-home">
        <Navbar.Brand>
          <a href="/">Personal Website</a>
        </Navbar.Brand>
        <div className="navbar-right">
          <Button
            onClick={this.props.aboutPage}
            className="btn btn-danger"
            variant="danger"
          >
            About
          </Button>
          <Button
            onClick={this.props.contactPage}
            className="btn btn-blue"
            variant="light"
          >
            Contact
          </Button>
        </div>
      </Navbar>
    );
  }
}
