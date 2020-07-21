import React, { Component } from 'react';
import { Navbar, Button } from 'react-bootstrap';

export default class Header extends Component {
  render() {
    return (
      <Navbar sticky="top" className="navbar-home">
        <Navbar.Brand href="/">
          <a>Personal Website</a>
        </Navbar.Brand>
        <div className="navbar-right">
          <Button className="btn btn-danger" variant="danger">
            Danger
          </Button>
          <Button className="btn btn-blue" variant="light">
            Light
          </Button>
        </div>
      </Navbar>
    );
  }
}
