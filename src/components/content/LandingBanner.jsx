import React, { Component } from 'react';
import SelectionBanner from './SelectionBanner';
import ContentBanner from './ContentBanner';

export default class LandingBanner extends Component {
  render() {
    return (
      <div className="landing-banner">
        <SelectionBanner />
        <ContentBanner />
      </div>
    );
  }
}
