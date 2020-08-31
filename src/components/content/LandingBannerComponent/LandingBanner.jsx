import React, { useContext } from 'react';
import ProjectSelectionBanner from './ProjectSelectionBanner';
import ProjectShowCaseBanner from './ProjectShowCaseBanner';
import { AppContext } from '../../../App';

export default function LandingBanner({ props }) {
  const { mediaQuery } = useContext(AppContext);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        width: '90vw',
        maxWidth: 1000,
        gridGap: 20,
        marginTop: 20,
        backgroundColor: 'yellow',
      }}
    >
      <ProjectSelectionBanner />
      <ProjectShowCaseBanner />
    </div>
  );
}
