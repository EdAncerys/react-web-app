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
    backgroundColor: colors.primary,
    padding: 50,
    width: '100vw',
    height: '60vh',
  },
};
