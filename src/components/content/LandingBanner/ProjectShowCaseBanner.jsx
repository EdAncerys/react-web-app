import React, { Component } from 'react';

export default class ProjectShowCaseBanner extends Component {
  showCaseProject = () => {
    let selectedProjectName;
    this.props.projects.forEach((element) => {
      if (element.id === this.props.selectedProjectId)
        selectedProjectName = element.name;
    });
    return selectedProjectName;
  };

  render() {
    return (
      <React.Fragment>
        {this.props.selectedProjectId === 1 && (
          <div className="content-banner">
            <h4 className="titleName">{this.showCaseProject()}</h4>
            <p>
              I've detailed some of my favorite projects, things I'm proud of,
              and all the skills I've developed since beginning to code. Here
              you will find few highlights I worked on my own or as outlined by
              the{' '}
              <a target="blank" href="https://makers.tech/">
                Makers Academy
              </a>{' '}
              course. Please navigate via the list to view my journey and the
              projects or see my highlights below. Click on a project for more
              details!
            </p>
            <p>
              I'm always learning and evolving, faster than I can update my
              website, so the best place to ﬁnd out what I'm currently working
              on is my GitHub portfolio.
            </p>
            <a target="blank" href="https://github.com/EdAncerys">
              GitHub portfolio
            </a>
            <a target="blank" href="https://www.linkedin.com/in/ancerys/">
              LinkedIn
            </a>
          </div>
        )}
      </React.Fragment>
    );
  }
}
