import React from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function PlayerVPlayer(props) {
  return (
    <React.Fragment>
      <div className="player-v-player-container">
        <img
          id={uuidv4()}
          className="selected-img"
          alt="TikTacToePlayer"
          src={props.playerOneChoice['src']}
        />
      </div>

      <p className="tick-tack-toe-logo player-v-player">
        {props.playerOneWins} vs {props.playerTwoWins}
      </p>

      <div className="player-v-player-container">
        <img
          id={uuidv4()}
          className="selected-img"
          alt="TikTacToePlayer"
          src={props.playerTwoChoice['src']}
        />
      </div>
    </React.Fragment>
  );
}
