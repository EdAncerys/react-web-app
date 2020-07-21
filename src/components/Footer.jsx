import React, { Component } from 'react';

export default class Footer extends Component {
  state = {
    year: new Date().getFullYear(),
  };

  render() {
    return (
      <div className="footer">
        <React.Fragment>
          <a>&copy; Copyright {this.state.year}. All Rights Reserved</a>
        </React.Fragment>
        <React.Fragment>
          <a href="/">Hire Me</a>
        </React.Fragment>
        <React.Fragment>
          <a href="/">Terms & Conditions</a>
        </React.Fragment>
      </div>
    );
  }
}
