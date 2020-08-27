import React from 'react';
import LinkedIn from '../images/LI-In-Bug.png';
import colors from '../config/colors';

export default function Footer({ goToContactPage }) {
  const year = new Date().getFullYear();
  const date = `${
    new Date().getFullYear() +
    '-' +
    (new Date().getMonth() + 1) +
    '-' +
    new Date().getDate()
  }`;

  return (
    <div style={styles.container}>
      <React.Fragment>
        <p>&copy; Copyright {year}. All Rights Reserved</p>
      </React.Fragment>
      <React.Fragment>
        <p onClick={goToContactPage} className="hire-me">
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
        <p>{date}</p>
      </React.Fragment>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '90vw',
    color: colors.medium,
  },
};
