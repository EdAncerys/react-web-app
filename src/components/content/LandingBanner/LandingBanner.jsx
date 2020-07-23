import React, { Component } from 'react';
import SelectionBanner from './ProjectSelectionBanner';
import ContentBanner from './ProjectShowCaseBanner';

export default class LandingBanner extends Component {
  state = {
    projects: [
      { id: 1, name: 'name1', description: 'description1', link: 'link1' },
      { id: 2, name: 'name2', description: 'description2', link: 'link2' },
      { id: 3, name: 'name3', description: 'description3', link: 'link3' },
    ],
  };

  render() {
    return (
      <div className="landing-banner">
        <SelectionBanner
          projects={this.state.projects}
          selectedProject={this.props.selectedProject}
        />
        <ContentBanner selectedProjectId={this.props.selectedProjectId} />
      </div>
    );
  }
}
