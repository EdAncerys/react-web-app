import React from 'react';

export default function PlayerChoice(props) {
  const players = ['Peter', 'Lois', 'Glen', 'Brian', 'Neil', 'Charter'];
  const player = props.playerOneTurn ? 'Player One' : 'Player Two';
  return (
    <React.Fragment>
      <p>{player} Pick Your Character</p>
      <div className="player-choice-container">
        {players.filter((player) => {
          return player !== 'Peter';
        })}
      </div>
    </React.Fragment>
  );
}
