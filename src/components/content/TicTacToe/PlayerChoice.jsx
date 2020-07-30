import React from 'react';

export default function PlayerChoice(props) {
  const tickTackToeFigures = [
    'Peter',
    'Lois',
    'Glen',
    'Brian',
    'Neil',
    'Charter',
  ];
  const playerMove = props.playerOneTurn ? 'Player One' : 'Player Two';
  const playerOneChoice = 'Peter1';

  const tickTackToeFiguresLeft = tickTackToeFigures.filter((figure) => {
    return figure !== playerOneChoice;
  });

  return (
    <React.Fragment>
      <p>{playerMove} Pick Your Character</p>
      <div className="player-choice-container">
        {tickTackToeFiguresLeft.map((figures) => {
          return <p>{figures}</p>;
        })}
      </div>
    </React.Fragment>
  );
}
