import React, { Component } from 'react';

export default class Article extends Component {
  render() {
    const { author } = this.props.article;

    return (
      <div>
        <p
          // onClick={this.props.selectedProject.bind(this, id)}
          className="project-name"
        >
          {author}
        </p>
      </div>
    );
  }
}
