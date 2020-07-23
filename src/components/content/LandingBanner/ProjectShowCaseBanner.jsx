import React, { Component } from 'react';

export default class ProjectShowCaseBanner extends Component {
  showCaseProject = () => {
    let descriptionBannerText;
    this.props.projects.forEach((element) => {
      if (element.id === this.props.selectedProjectId)
        descriptionBannerText = element.description;
    });
    return descriptionBannerText;
  };

  render() {
    return <div className="content-banner">{this.showCaseProject()}</div>;
  }
}
