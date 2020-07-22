import React, { Component } from 'react';
import ProjectItem from './ProjectItem';

export default class SelectionBanner extends Component {
  state = {
    projects: [
      { id: 1, name: 'name1', description: 'description1', link: 'link1' },
      { id: 2, name: 'name2', description: 'description2', link: 'link2' },
      { id: 3, name: 'name3', description: 'description3', link: 'link3' },
    ],
  };
  render() {
    return (
      <div className="selection-banner">
        Selected Projects
        {this.state.projects.map((project) => (
          <ProjectItem key={project.id} project={project} />
        ))}
      </div>
    );
  }
}
