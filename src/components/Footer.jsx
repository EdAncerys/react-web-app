import React, { Component } from 'react';

export default class Footer extends Component {
  state = {
    year: new Date().getFullYear(),
  };

  render() {
    return (
      <div className="footer">
        <React.Fragment>
          <p>&copy; Copyright {this.state.year}. All Rights Reserved</p>
        </React.Fragment>
        <React.Fragment>
          <p onClick={this.props.contactPage} className="link">
            Hire Me
          </p>
        </React.Fragment>
        <React.Fragment>
          <p className="link">Terms & Conditions</p>
        </React.Fragment>
      </div>
    );
  }
}
