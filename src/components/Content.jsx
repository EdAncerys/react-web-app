import React, { Component } from 'react';
import LandingBanner from './content/LandingBannerComponent/LandingBanner';
import FeatureBanner from './content/FeatureBannerComponent/FeatureBanner';

export default class Content extends Component {
  render() {
    return (
      <React.Fragment>
        <LandingBanner
          selectedProject={this.props.selectedProject}
          selectedProjectId={this.props.selectedProjectId}
        />
        <FeatureBanner
          goToTickTackToePage={this.props.goToTickTackToePage}
          goToRPSPage={this.props.goToRPSPage}
          goToHangManPage={this.props.goToHangManPage}
        />
      </React.Fragment>
    );
  }
}
