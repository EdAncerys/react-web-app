import React from 'react';
import LandingBanner from '../content/LandingBannerComponent/LandingBanner';
import FeatureBanner from '../content/FeatureBannerComponent/FeatureBanner';

export default function Content({ props }) {
  return (
    <div style={styles.container}>
      <LandingBanner />
      <FeatureBanner />
    </div>
  );
}

const styles = {
  container: {
    display: 'grid',
    justifyContent: 'center',
    width: '90vw',
    backgroundColor: 'red',
  },
};
