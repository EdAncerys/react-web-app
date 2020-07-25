import React, { Component } from 'react';

export default class Footer extends Component {
  state = {
    year: new Date().getFullYear(),
    date:
      new Date().getFullYear() +
      '-' +
      (new Date().getMonth() + 1) +
      '-' +
      new Date().getDate(),
  };

  render() {
    return (
      <div className="footer">
        <React.Fragment>
          <p>&copy; Copyright {this.state.year}. All Rights Reserved</p>
        </React.Fragment>
        <React.Fragment>
          <p onClick={this.props.goToContactPage} className="hire-me">
            Hire Me
          </p>
        </React.Fragment>
        <React.Fragment>
          <p>{this.state.date}</p>
        </React.Fragment>
      </div>
    );
  }
}
