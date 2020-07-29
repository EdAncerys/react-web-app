import React, { useState } from 'react';
import Hart from '../../../images/TickTackToe/hart.png';
import Cross from '../../../images/TickTackToe/cross.png';
import Stewie01 from '../../../images/TickTackToe/Stewie-01.png';
import BoardRow from './BoardRow';

export default function TickTackToe() {
  const [takenTiles, setTakenTiles] = useState([]);
  const [playerOneTurn, setPlayerOneTurn] = useState(true);
  const [tileOneCSS, setTileOneCSS] = useState();
  const [tileTwoCSS, setTileTwoCSS] = useState();
  const [tileThreeCSS, setTileThreeCSS] = useState();

  const playerOneCSS = {
    background: 'none',
    border: '1px solid hsl(0, 100%, 50%)',
    backgroundImage: `url(${Hart})`,
    backgroundSize: 'cover',
  };
  const playerTwoCSS = {
    background: 'none',
    border: '1px solid hsl(50, 100%, 50%)',
    backgroundImage: `url(${Cross})`,
    backgroundSize: 'cover',
  };

  const handleTileCSS = (id) => {
    if (id == 1) setTileOneCSS(playerOneTurn ? playerOneCSS : playerTwoCSS);
    if (id == 2) setTileTwoCSS(playerOneTurn ? playerOneCSS : playerTwoCSS);
    if (id == 3) setTileThreeCSS(playerOneTurn ? playerOneCSS : playerTwoCSS);
  };

  const handleTakenTiles = (id) => {
    if (!takenTiles.includes(id)) {
      takenTiles.push(id);
      handleTileCSS(id);
      setPlayerOneTurn(!playerOneTurn);
    }
  };

  const handleTileClicked = (e) => {
    handleTakenTiles(e.target.id);

    console.log('ID:', e.target.id, 'TilesTaken  ' + takenTiles);
  };

  return (
    <div className="tick-tack-toe-page">
      <h1>Family Guy TickTackToe</h1>
      {/* <div className="feature-img-container">
        <img className="feature-img" alt="TikTacToeLogo" src={Stewie01} />
      </div> */}
      <div className="tick-tack-toe-board">
        <BoardRow
          tileOneCSS={tileOneCSS}
          tileTwoCSS={tileTwoCSS}
          tileThreeCSS={tileThreeCSS}
          handleTileClicked={handleTileClicked}
        />
      </div>
    </div>
  );
}
