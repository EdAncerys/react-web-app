import React, { Component } from 'react';
import LandingBanner from './content/LandingBanner';
import FeatureBanner from './content/FeatureBanner';

export default class Content extends Component {
  render() {
    return (
      <React.Fragment>
        <LandingBanner />
        <FeatureBanner />
      </React.Fragment>
    );
  }
}
