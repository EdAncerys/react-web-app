import React from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function AvailableCharacters(props) {
  return props.tickTackToeFiguresLeft.map((figure) => {
    return (
      figure['id'] !== props.playerOneChoice['id'] && (
        <div key={uuidv4()} className="player-img-container">
          <img
            key={uuidv4()}
            id={figure['id']}
            className="selected-img"
            onClick={(e) => props.playerSelection(e)}
            alt="TikTacToePlayer"
            src={figure['name']}
          />
        </div>
      )
    );
  });
}
