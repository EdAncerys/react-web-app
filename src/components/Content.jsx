import React, { Component } from 'react';

export default class Content extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="landing-banner">
          <div className="selection-banner">Selected Projects</div>
          <div className="content-banner">Main Content</div>
        </div>
        <div className="feature-banner">
          <div className="feature-img">Feature img</div>
          <div className="feature-content">Feature Content</div>
        </div>
      </React.Fragment>
    );
  }
}
