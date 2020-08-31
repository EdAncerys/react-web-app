import React, { Component } from 'react';
import ThereAndBackImg from '../../../images/map-min.png';
import TickTackToeImg from '../../../images/tick-tack-toe-min.png';
import HangMan from '../../../images/hang-man-min.png';
import Rock from '../../../images/RPS/rock-min.png';
import FeaturedElement from './FeaturedElement';
import colors from '../../../config/colors';
import { HangManContext } from '../../pages/HangMan';

export default class FeatureBanner extends Component {
  render() {
    return (
      <div className="feature-banner">
        <FeaturedElement
          src={HangMan}
          text="hello world"
          color={colors.yellow}
        />

        <div
          className="feature-banner-component feature-content-2"
          onClick={this.props.goToHangManPage}
        >
          <div className="feature-img-container">
            <img className="feature-img" alt="ThereAndBack" src={HangMan} />
          </div>
          <div className="feature-content">
            <p>
              Hangman is a paper and pencil guessing game for two or more
              players. One player thinks of a word, phrase or sentence and the
              other(s) tries to guess it by suggesting letters within a certain
              number of guesses.
            </p>
          </div>
        </div>
        <div
          className="feature-banner-component feature-banner-component-2"
          onClick={this.props.goToRPSPage}
        >
          <div className="feature-content">
            <p>
              Rock paper scissors is a hand game usually played between two
              people, in which each player simultaneously forms one of three
              shapes with an outstretched hand. These shapes are "rock" (a
              closed fist), "paper" (a flat hand), and "scissors" (a fist with
              the index finger and middle finger extended, forming a V).{' '}
            </p>
          </div>
          <div className="feature-img-container">
            <img className="feature-img" alt="TicTacToe" src={Rock} />
          </div>
        </div>
        <div
          className="feature-banner-component feature-content-2"
          onClick={() =>
            window.open('https://thereandback.surge.sh/', '_blank')
          }
        >
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
          className="feature-banner-component feature-banner-component-2"
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
            <img className="feature-img" alt="TicTacToe" src={TickTackToeImg} />
          </div>
        </div>
      </div>
    );
  }
}
