import React from 'react';
import PeterOne from '../../../images/TickTackToe/FamilyGuyCharacters/Peter-01-min.png';
import PeterTwo from '../../../images/TickTackToe/FamilyGuyCharacters/Peter-02-min.png';
import Brian from '../../../images/TickTackToe/FamilyGuyCharacters/Brian-min.png';
import Chris from '../../../images/TickTackToe/FamilyGuyCharacters/Chris-min.png';
import Glenn from '../../../images/TickTackToe/FamilyGuyCharacters/Glenn-min.png';
import Herbert from '../../../images/TickTackToe/FamilyGuyCharacters/Herbert-min.png';
import Joe from '../../../images/TickTackToe/FamilyGuyCharacters/Joe-min.png';
import Lois from '../../../images/TickTackToe/FamilyGuyCharacters/Meg-min.png';
import Stewie from '../../../images/TickTackToe/FamilyGuyCharacters/Stewie-min.png';

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
