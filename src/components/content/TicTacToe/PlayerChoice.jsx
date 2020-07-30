import React from 'react';
import Peter from '../../../images/map-min.png';

export default function PlayerChoice(props) {
  const tickTackToeFigures = [
    Peter,
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
          return (
            <div className="player-img-container">
              <img
                className="selected-img"
                alt="TikTacToePlayer"
                src={figures}
              />
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
}
