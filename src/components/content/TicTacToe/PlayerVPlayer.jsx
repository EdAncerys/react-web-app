import React from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function PlayerVPlayer(props) {
  return (
    <React.Fragment>
      {props.tickTackToeFigures.map((figure) => {
        return (
          <React.Fragment key={uuidv4()}>
            {figure['id'] === props.playerOneChoice && (
              <div className="player-v-player-container">
                <img
                  id={figure['id']}
                  className="selected-img"
                  alt="TikTacToePlayer"
                  src={figure['name']}
                />
              </div>
            )}
          </React.Fragment>
        );
      })}
      <p className="tick-tack-toe-logo player-v-player">vs</p>
      {props.tickTackToeFigures.map((figure) => {
        return (
          <React.Fragment key={uuidv4()}>
            {figure['id'] === props.playerTwoChoice && (
              <div className="player-v-player-container">
                <img
                  id={figure['id']}
                  className="selected-img"
                  alt="TikTacToePlayer"
                  src={figure['name']}
                />
              </div>
            )}
          </React.Fragment>
        );
      })}
    </React.Fragment>
  );
}
