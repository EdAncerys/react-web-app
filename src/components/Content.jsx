import React from 'react';
import LandingBanner from './content/LandingBannerComponent/LandingBanner';
import FeatureBanner from './content/FeatureBannerComponent/FeatureBanner';

export default function Content({
  selectedProject,
  selectedProjectId,
  goToTickTackToePage,
  goToRPSPage,
  goToHangManPage,
}) {
  return (
    <div>
      <LandingBanner
        selectedProject={selectedProject}
        selectedProjectId={selectedProjectId}
      />
      <FeatureBanner
        goToTickTackToePage={goToTickTackToePage}
        goToRPSPage={goToRPSPage}
        goToHangManPage={goToHangManPage}
      />
    </div>
  );
}
