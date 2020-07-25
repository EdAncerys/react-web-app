import React, { Component } from 'react';

export default class FeatureBanner extends Component {
  render() {
    return (
      <div className="feature-banner">
        <div className="feature-img-container">
          <img
            className="feature-img"
            alt="ThereAndBack"
            src={require('../../../images/map.png')}
          />
        </div>
        <div className="feature-content">
          <p>
            Variety - is a spice of life! ThereAndBack is a Web App that lets
            User browse the best round routes possible. If its two legs or for
            weels - we got you covered! For running, cycling, walking...well and
            driving if that's a preference can pick a route of your preference.
            And if you don't like it the first time - just hit randomize to
            generate a different route.{' '}
          </p>
        </div>
      </div>
    );
  }
}
