import React, { Component } from 'react';
import SelectionBanner from './ProjectSelectionBanner';
import ProjectShowCaseBanner from './ProjectShowCaseBanner';

export default class LandingBanner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        { id: 1, name: 'About', link: 'link1' },
        { id: 2, name: 'ThereAndBack', link: 'link1' },
        { id: 3, name: 'AceBook', link: 'link1' },
        { id: 4, name: 'MakersBnB', link: 'link1' },
        { id: 5, name: 'Airport Challenge', link: 'link1' },
        { id: 6, name: 'Takeaway Challenge', link: 'link1' },
        { id: 7, name: 'Bank tech test', link: 'link1' },
        { id: 8, name: 'Gilded Rose Refactoring Kata', link: 'link1' },
      ],
    };
  }

  render() {
    return (
      <div className="landing-banner">
        <SelectionBanner
          projects={this.state.projects}
          selectedProject={this.props.selectedProject}
        />
        <ProjectShowCaseBanner
          projects={this.state.projects}
          selectedProjectId={this.props.selectedProjectId}
        />
      </div>
    );
  }
}
