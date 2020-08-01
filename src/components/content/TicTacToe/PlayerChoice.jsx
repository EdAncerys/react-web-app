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
    <div className="player-choice-container">
      {!props.playerTwoChoice && (
        <React.Fragment>
          <p>{playerMove} Pick Your Character</p>
          <AvailableCharacters
            playerSelection={props.playerSelection}
            tickTackToeFiguresLeft={tickTackToeFiguresLeft}
            playerOneChoice={props.playerOneChoice}
          />
        </React.Fragment>
      )}

      {props.playerTwoChoice && (
        <PlayerVPlayer
          playerOneChoice={props.playerOneChoice}
          playerTwoChoice={props.playerTwoChoice}
          tickTackToeFigures={tickTackToeFigures}
        />
      )}

      {/* {props.playerTwoChoice &&
        tickTackToeFigures.map((figure) => {
          return (
            <React.Fragment>
              {figure['id'] === props.playerTwoChoice && (
                <div className="player-v-player-container">
                  <img
                    key={uuidv4()}
                    id={figure['id']}
                    className="selected-img"
                    alt="TikTacToePlayer"
                    src={figure['name']}
                  />
                </div>
              )}
            </React.Fragment>
          );
        })} */}
    </div>
  );
}
