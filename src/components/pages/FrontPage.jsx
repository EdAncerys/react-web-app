import React from 'react';
import LandingBanner from '../content/LandingBannerComponent/LandingBanner';
import FeatureBanner from '../content/FeatureBannerComponent/FeatureBanner';
import Link from '../Link';

import colors from '../../config/colors';

export default function Content({ props }) {
  return (
    <div style={styles.container}>
      <div style={styles.aboutBanner}>
        <div style={styles.aboutContent}>
          <div style={styles.text}>
            I've detailed here some of my favorite projects, things I'm proud
            of, and all the skills I've developed since beginning to code. Here
            you will find a few highlights I worked on my own or as outlined by
            the{' '}
            <Link
              title="Makers Academy"
              color={colors.yellow}
              href="https://makers.tech/"
            />
            course. Please navigate via the list to view my journey and the
            projects or see my highlights below. Click on a project for more
            details!
          </div>
          <div style={styles.text}>
            I'm always learning and evolving, faster than I can update my
            website, so the best place to ﬁnd out what I'm currently working on
            - is my GitHub portfolio.
          </div>
          <div style={styles.link}>
            <Link
              title="GitHub portfolio"
              color={colors.yellow}
              href="https://github.com/EdAncerys"
            />
            <Link
              title="LinkedIn"
              color={colors.yellow}
              href="https://www.linkedin.com/in/ancerys/"
            />
          </div>
        </div>
      </div>
      <LandingBanner />
      <FeatureBanner />
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  aboutBanner: {
    display: 'grid',
    justifyContent: 'center',
    backgroundColor: colors.primary,
    width: '100vw',
  },
  aboutContent: {
    display: 'grid',
    justifyContent: 'center',
    alignItems: 'center',
    width: '80vw',
    maxWidth: 800,
    height: 400,
    color: colors.white,
    textAlign: 'justify',
  },
  link: {
    display: 'grid',
    justifyContent: 'center',
  },
};
