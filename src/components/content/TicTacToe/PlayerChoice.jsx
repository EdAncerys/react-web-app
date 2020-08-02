import React from 'react';
import Peter from '../../../images/TickTackToe/FamilyGuyCharacters/Peter-min.png';
import Brian from '../../../images/TickTackToe/FamilyGuyCharacters/Brian-min.png';
import Chris from '../../../images/TickTackToe/FamilyGuyCharacters/Chris-min.png';
import Glenn from '../../../images/TickTackToe/FamilyGuyCharacters/Glenn-min.png';
import Meg from '../../../images/TickTackToe/FamilyGuyCharacters/Meg-min.png';
import Herbert from '../../../images/TickTackToe/FamilyGuyCharacters/Herbert-min.png';
import Joe from '../../../images/TickTackToe/FamilyGuyCharacters/Joe-min.png';
import Lois from '../../../images/TickTackToe/FamilyGuyCharacters/Lois-min.png';
import Stewie from '../../../images/TickTackToe/FamilyGuyCharacters/Stewie-min.png';
import AvailableCharacters from './AvailableCharacters';
import PlayerVPlayer from './PlayerVPlayer';

export default function PlayerChoice(props) {
  const tickTackToeFigures = [
    { name: Peter, id: 'Peter' },
    { name: Brian, id: 'Brian' },
    { name: Chris, id: 'Chris' },
    { name: Glenn, id: 'Glenn' },
    { name: Meg, id: 'Meg' },
    { name: Herbert, id: 'Herbert' },
    { name: Joe, id: 'Joe' },
    { name: Lois, id: 'Lois' },
    { name: Stewie, id: 'Stewie' },
  ];
  const playerMove = props.playerOneTurn ? 'Player One' : 'Player Two';

  const tickTackToeFiguresLeft = tickTackToeFigures.filter((figure) => {
    return figure !== props.playerOneChoice;
  });

  return (
    <React.Fragment>
      {props.playerTwoChoice['id'] === '' && (
        <h4 className="main-ticktacktoe-text">
          {playerMove} Pick Your Character
        </h4>
      )}
      <div className="player-choice-container">
        {props.playerTwoChoice['id'] === '' && (
          <React.Fragment>
            <AvailableCharacters
              playerSelection={props.playerSelection}
              tickTackToeFiguresLeft={tickTackToeFiguresLeft}
              playerOneChoice={props.playerOneChoice}
            />
          </React.Fragment>
        )}

        {props.playerTwoChoice['id'] !== '' && (
          <PlayerVPlayer
            playerOneChoice={props.playerOneChoice}
            playerTwoChoice={props.playerTwoChoice}
            playerOneWins={props.playerOneWins}
            playerTwoWins={props.playerTwoWins}
            tickTackToeFigures={tickTackToeFigures}
          />
        )}
      </div>
    </React.Fragment>
  );
}
