import React, { Component } from 'react';
import LandingBanner from './content/LandingBanner/LandingBanner';
import FeatureBanner from './content/FeatureBanner/FeatureBanner';

export default class Content extends Component {
  state = {
    selectedProjectId: false,
  };

  selectedProject = (id) => {
    this.setState(
      {
        selectedProjectId: id,
      },
      () => console.log(id, this.state.selectedProjectId)
    );
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
