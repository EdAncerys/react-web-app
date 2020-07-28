import React, { Component } from 'react';
import ThereAndBackImg from '../../../images/map.png';

export default class FeatureBanner extends Component {
  render() {
    return (
      <div className="feature-banner">
        <div className="feature-img-container">
          <img
            className="feature-img"
            alt="ThereAndBack"
            src={ThereAndBackImg}
          />
        </div>
        <div className="feature-content">
          <p>
            Variety - is a spice of life! ThereAndBack is a Web App that lets
            Users browse the best round routes possible. If its two legs or four
            weals - we got you covered! For running, cycling, walking...well,
            what a heck, even driving if that's a preference! You can pick a
            route of your preference. And if you don't like it the first time -
            just hit randomize to generate a different one.{' '}
          </p>
        </div>
      </div>
    );
  }
}
