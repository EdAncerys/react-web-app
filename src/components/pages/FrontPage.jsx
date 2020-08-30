import React from 'react';
import LandingBanner from '../content/LandingBannerComponent/LandingBanner';
import FeatureBanner from '../content/FeatureBannerComponent/FeatureBanner';

import colors from '../../config/colors';

export default function Content({ props }) {
  return (
    <div style={styles.container}>
      <LandingBanner
      // selectedProject={selectedProject}
      // selectedProjectId={selectedProjectId}
      />
      {/* <FeatureBanner
      // goToTickTackToePage={goToTickTackToePage}
      // goToRPSPage={goToRPSPage}
      // goToHangManPage={goToHangManPage}
      /> */}
    </div>
  );
}

const styles = {
  container: {
    color: colors.medium,
  },
};
