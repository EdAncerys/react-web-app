import React, { Component } from 'react';
import LinkedIn from '../images/LI-In-Bug.png';
import colors from '../config/colors';

export default class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      year: new Date().getFullYear(),
      date:
        new Date().getFullYear() +
        '-' +
        (new Date().getMonth() + 1) +
        '-' +
        new Date().getDate(),
    };
  }

  render() {
    return (
      <div style={styles.container} className="footer">
        <React.Fragment>
          <p>&copy; Copyright {this.state.year}. All Rights Reserved</p>
        </React.Fragment>
        <React.Fragment>
          <p onClick={this.props.goToContactPage} className="hire-me">
            Hire Me
          </p>
          <img
            className="linked-in-logo"
            alt="LinkedIn"
            src={LinkedIn}
            onClick={() =>
              window.open('https://www.linkedin.com/in/ancerys/', '_blank')
            }
          />
        </React.Fragment>
        <React.Fragment>
          <p>{this.state.date}</p>
        </React.Fragment>
      </div>
    );
  }
}

const styles = {
  container: {
    color: colors.medium,
  },
};
