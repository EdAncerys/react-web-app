import React, { Component } from 'react';
import LandingBanner from './LandingBanner';
import FeatureBanner from './FeatureBanner';

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
