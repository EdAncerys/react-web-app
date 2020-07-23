import React, { Component } from 'react';
import LandingBanner from './content/LandingBanner/LandingBanner';
import FeatureBanner from './content/FeatureBanner/FeatureBanner';

export default class Content extends Component {
  state = {
    selectedProjectId: 1,
  };

  selectedProject = (id) => {
    this.setState({
      selectedProjectId: id,
    });
  };

  render() {
    return (
      <React.Fragment>
        <LandingBanner
          selectedProject={this.selectedProject}
          selectedProjectId={this.state.selectedProjectId}
        />
        <FeatureBanner />
      </React.Fragment>
    );
  }
}
