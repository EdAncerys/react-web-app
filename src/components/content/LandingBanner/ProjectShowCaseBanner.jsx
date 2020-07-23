import React, { Component } from 'react';

export default class ContentBanner extends Component {
  render() {
    return <div className="content-banner">{this.props.selectedProjectId}</div>;
  }
}
