import React from 'react';
import ProjectSelectionBanner from './ProjectSelectionBanner';
import ProjectShowCaseBanner from './ProjectShowCaseBanner';
import colors from '../../../config/colors';

export default function LandingBanner({ props }) {
  return (
    <div style={styles.container}>
      <ProjectSelectionBanner />
      <ProjectShowCaseBanner />
    </div>
  );
}

const styles = {
  container: {
    display: 'grid',
    justifyContent: 'center',
    gridTemplateColumns: 'auto auto',
    gridGap: 30,
    backgroundColor: colors.primary,
    paddingLeft: '5vw',
    paddingRight: '5vw',
    paddingTop: '5vh',
    paddingBottom: '5vh',
    width: '100vw',
    overflow: 'scroll',
  },
};
