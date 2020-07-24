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
              I've detailed here some of my favorite projects, things I'm proud
              of, and all the skills I've developed since beginning to code.
              Here you will find a few highlights I worked on my own or as
              outlined by the{' '}
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
              on - is my GitHub portfolio.
            </p>
            <a target="blank" href="https://github.com/EdAncerys">
              GitHub portfolio
            </a>
            <a target="blank" href="https://www.linkedin.com/in/ancerys/">
              LinkedIn
            </a>
          </div>
        )}
        {this.props.selectedProjectId === 2 && (
          <div className="content-banner">
            <h4 className="titleName">{this.showCaseProject()}</h4>
            <p>
              The final project created by team JAZE (Jed Stanton, Andrew Hulme,
              Zsofia Szonyi, Ed Ancerys) at Makers Academy.
            </p>
            <p>
              The app aims to solve the problem of the user who wants to find a
              circular route for outdoor activities (walking, cycling, hiking).
              The user can view the map and search for routes without logging
              in, either circular routes or routes between a start and end
              point. Different activity types can be selected, and the result
              can be randomized. Once the user is logged in, favorite routes can
              be saved in My Routes and can be viewed on the map, or they can be
              removed from the list.
            </p>
          </div>
        )}
      </React.Fragment>
    );
  }
}
