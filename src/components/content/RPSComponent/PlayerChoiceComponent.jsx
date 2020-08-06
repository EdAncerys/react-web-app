import React from 'react';

export default function PlayerChoiceComponent(props) {
  return (
    <React.Fragment>
      <p className="rps-main-text">Pick Your Choice</p>
      <div className="rps-user-selection">
        <img
          id="rock"
          src={`${props.rps['rock']}`}
          className="rps-img"
          alt="rock-img"
          onClick={(e) => props.handleRPSClick(e)}
        ></img>
        <img
          id="paper"
          src={`${props.rps['paper']}`}
          className="rps-img"
          alt="paper-img"
          onClick={(e) => props.handleRPSClick(e)}
        ></img>
        <img
          id="scissors"
          src={`${props.rps['scissors']}`}
          className="rps-img"
          alt="scissors-img"
          onClick={(e) => props.handleRPSClick(e)}
        ></img>
      </div>
    </React.Fragment>
  );
}
