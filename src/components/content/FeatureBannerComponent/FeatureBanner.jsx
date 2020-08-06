import React, { Component } from 'react';
import ThereAndBackImg from '../../../images/map-min.png';
import TickTackToeImg from '../../../images/tick-tack-toe-min.png';

export default class FeatureBanner extends Component {
  render() {
    return (
      <div className="feature-banner">
        <div className="feature-banner-component">
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
              users browse the best round routes possible. If its two legs or
              four weals - we got you covered! For running, cycling,
              walking...well, what a heck, even driving if that's a preference!
              You can pick a route of your preference. And if you don't like it
              the first time - just hit randomize to generate a different one.{' '}
            </p>
          </div>
        </div>
        <div
          className="feature-banner-component"
          onClick={this.props.goToTickTackToePage}
        >
          <div className="feature-content">
            <p>
              Tic-tac-toe with a twist! This game commonly is a paper-and-pencil
              game for two players, X and O, who take turns marking the spaces
              in a 3×3 grid. The player who succeeds in placing three of their
              marks in a horizontal, vertical, or diagonal row is the winner.{' '}
            </p>
          </div>
          <div className="feature-img-container">
            <img
              className="feature-img"
              alt="ThereAndBack"
              src={TickTackToeImg}
            />
          </div>
        </div>
      </div>
    );
  }
}
