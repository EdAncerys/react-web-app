import React from 'react';

export default function GameWinnerContainer(props) {
  return (
    <React.Fragment>
      <div className="rps-game-winner-container" onClick={props.resetGame}>
        <p className="rps-main-text">{props.rps['gameWinner']}</p>
        <div className="rps-vs-container">
          <img
            id="scissors"
            src={props.rps[`${props.rps['userRPSSelection']}`]}
            className="rps-img"
            alt="scissors-img"
          ></img>
          <p className="rps-main-text">vs</p>
          <img
            id="scissors"
            src={props.rps[`${props.rps['computerRPSSelection']}`]}
            className="rps-img"
            alt="scissors-img"
          ></img>
        </div>
        <p className="rps-main-text black-text">Tap Me To Play Again</p>
      </div>
    </React.Fragment>
  );
}
