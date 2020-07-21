import React, { Component } from 'react';
import { Navbar, Button } from 'react-bootstrap';

export default class Header extends Component {
  render() {
    return (
      <Navbar className="navBar">
        <Navbar.Brand href="/">
          <h4>Personal Website</h4>
        </Navbar.Brand>
        <div className="navBar-right">
          <Button className="btn btn--danger" variant="danger">
            Danger
          </Button>
          <Button className="btn btn--primary" variant="light">
            Light
          </Button>
        </div>
      </Navbar>
    );
  }
}
