import React, { Component } from 'react';
import LandingBanner from './content/LandingBanner';
import FeatureBanner from './content/FeatureBanner';

export default class Content extends Component {
  state = {};

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
        <LandingBanner selectedProject={this.selectedProject} />
        <FeatureBanner />
      </React.Fragment>
    );
  }
}
