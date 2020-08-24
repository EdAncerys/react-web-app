import React, { useContext } from 'react';
import { HangManContext } from '../../pages/HangMan';

import colors from '../../../config/colors';

export default function Notification({}) {
  const { popUp } = useContext(HangManContext);

  return <div style={styles.container}>{popUp}</div>;
}

const styles = {
  container: {
    position: 'absolute',
    width: '90vw',
    marginTop: '40%',
    marginRight: 'auto',
    marginLeft: 'auto',
    left: 0,
    right: 0,
    top: 0,
    textAlign: 'center',
    backgroundColor: colors.secondary,
    color: colors.white,
    padding: 30,
    fontSize: 24,
    fontWeight: 600,
  },
};
