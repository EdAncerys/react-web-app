import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PeterOne from '../../../images/TickTackToe/FamilyGuyCharacters/Peter-01-min.png';
import PeterTwo from '../../../images/TickTackToe/FamilyGuyCharacters/Peter-02-min.png';
import Brian from '../../../images/TickTackToe/FamilyGuyCharacters/Brian-min.png';
import Chris from '../../../images/TickTackToe/FamilyGuyCharacters/Chris-min.png';
import Glenn from '../../../images/TickTackToe/FamilyGuyCharacters/Glenn-min.png';
import Meg from '../../../images/TickTackToe/FamilyGuyCharacters/Meg-min.png';
import Herbert from '../../../images/TickTackToe/FamilyGuyCharacters/Herbert-min.png';
import Joe from '../../../images/TickTackToe/FamilyGuyCharacters/Joe-min.png';
import Lois from '../../../images/TickTackToe/FamilyGuyCharacters/Lois-min.png';
import Stewie from '../../../images/TickTackToe/FamilyGuyCharacters/Stewie-min.png';

export default function PlayerChoice(props) {
  const tickTackToeFigures = [
    { name: PeterOne, id: 'PeterOne' },
    { name: Brian, id: 'Brian' },
    { name: Chris, id: 'Chris' },
    { name: Glenn, id: 'Glenn' },
    { name: Meg, id: 'Meg' },
    { name: Herbert, id: 'Herbert' },
    { name: Joe, id: 'Joe' },
    { name: Lois, id: 'Lois' },
    { name: PeterTwo, id: 'PeterTwo' },
    { name: Stewie, id: 'Stewie' },
  ];
  const playerMove = props.playerOneTurn ? 'Player One' : 'Player Two';

  const tickTackToeFiguresLeft = tickTackToeFigures.filter((figure) => {
    return figure !== props.playerOneChoice;
  });

  return (
    <React.Fragment>
      <p>{playerMove} Pick Your Character</p>
      <div className="player-choice-container">
        {tickTackToeFiguresLeft.map((figure) => {
          return (
            figure['id'] !== props.playerOneChoice && (
              <div key={uuidv4()} className="player-img-container">
                <img
                  id={figure['id']}
                  className="selected-img"
                  onClick={(e) => props.playerSelection(e)}
                  alt="TikTacToePlayer"
                  src={figure['name']}
                />
              </div>
            )
          );
        })}
      </div>
    </React.Fragment>
  );
}
