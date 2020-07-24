import React, { Component } from 'react';

export default class FeatureBanner extends Component {
  render() {
    return (
      <div className="feature-banner">
        <div className="feature-img-container">
          <img
            className="feature-img"
            src={require('../../../images/map.png')}
          />
        </div>
        <div className="feature-content">Feature Content</div>
      </div>
    );
  }
}
