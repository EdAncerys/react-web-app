import React, { Component } from 'react';
import ProjectItem from './ProjectItem';

export default class SelectionBanner extends Component {
  render() {
    return (
      <div className="selection-banner">
        <div className='selection-title'>
          <h4 className="title-name">Selected Projects</h4>
        </div>
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
