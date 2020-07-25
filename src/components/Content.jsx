import React, { Component } from 'react';
import LandingBanner from './content/LandingBanner/LandingBanner';
import FeatureBanner from './content/FeatureBanner/FeatureBanner';

export default class Content extends Component {
  render() {
    return (
      <React.Fragment>
        <LandingBanner
          selectedProject={this.props.selectedProject}
          selectedProjectId={this.props.selectedProjectId}
        />
        <FeatureBanner />
      </React.Fragment>
    );
  }
}
