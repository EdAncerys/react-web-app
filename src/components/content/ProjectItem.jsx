import React, { Component } from 'react';

export default class ProjectItem extends Component {
  render() {
    const { id, name } = this.props.project;
    return (
      <div>
        <p
          onClick={this.props.selectedProject.bind(this, id)}
          // onClick={() => this.props.selectedProject(id)}
          className="project-name"
        >
          {name}
        </p>
      </div>
    );
  }
}
