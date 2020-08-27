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
      <div>&copy; Copyright {year}. All Rights Reserved</div>
      <div onClick={goToContactPage} className="hire-me">
        Hire Me
      </div>
      <img
        className="linked-in-logo"
        alt="LinkedIn"
        src={LinkedIn}
        onClick={() =>
          window.open('https://www.linkedin.com/in/ancerys/', '_blank')
        }
      />
      <div>{date}</div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingTop: 20,
    width: '90vw',
    height: '10vh',
    borderTop: `1px solid ${colors.light}`,
    color: colors.medium,
  },
};
