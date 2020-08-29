import React from 'react';
import { HiOutlineMail } from 'react-icons/hi';

import colors from '../../config/colors';

export default function Contact({ props }) {
  return (
    <div style={styles.container}>
      <div style={styles.heading}>Get In Touch</div>
      <div>Are you interested in working with me or just have a question?</div>
      <div style={{ color: colors.primary, marginTop: 20 }}>
        <a style={styles.link} href="lookatemail@gmail.com">
          Get in touch with me by email
        </a>
        <HiOutlineMail size={25} />
      </div>
    </div>
  );
}

const styles = {
  container: {
    marginTop: '10vh',
    textAlign: 'center',
    color: colors.medium,
  },
  heading: {
    fontSize: 30,
    fontWeight: 600,
  },
  link: {
    color: colors.primary,
    fontSize: 20,
    textDecoration: 'none',
    marginRight: 10,
  },
};
