import React, { Component } from 'react';

export default class ProjectItem extends Component {
  render() {
    const { name } = this.props.project;
    return (
      <div>
        <p className="project-name">{name}</p>
      </div>
    );
  }
}
