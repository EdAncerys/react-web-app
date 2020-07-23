import React, { Component } from 'react';
import ProjectItem from './ProjectItem';

export default class SelectionBanner extends Component {
  render() {
    return (
      <div className="selection-banner">
        <h4>Selected Projects</h4>
        {this.props.projects.map((project) => (
          <ProjectItem
            key={project.id}
            project={project}
            selectedProject={this.props.selectedProject}
          />
        ))}
      </div>
    );
  }
}
