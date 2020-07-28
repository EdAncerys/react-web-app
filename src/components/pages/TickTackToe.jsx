import React, { useState } from 'react';
import Hart from '../../images/TickTackToe/hart.png';
import Cross from '../../images/TickTackToe/cross.png';

export default function TickTackToe() {
  const [takenTiles, setTakenTiles] = useState([]);
  const [playerOneTurn, setPlayerOneTurn] = useState(true);
  const [tileOneCSS, setTileOneCSS] = useState();
  const [tileTwoCSS, setTileTwoCSS] = useState();
  const [tileThreeCSS, setTileThreeCSS] = useState();

  const playerOneCSS = { background: 'red' };
  const playerTwoCSS = { background: 'blue' };

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
      <h1>TickTackToe</h1>
      <div className="tick-tack-toe-board">
        <div className="tile-row">
          <div
            id="1"
            style={tileOneCSS}
            className="board-tile"
            onClick={(e) => handleTileClicked(e)}
          ></div>
          <div
            id="2"
            style={tileTwoCSS}
            className="board-tile"
            onClick={(e) => handleTileClicked(e)}
          ></div>
          <div
            id="3"
            style={tileThreeCSS}
            className="board-tile"
            // className={`board-tile tile-${tileThreeCSS}`}
            onClick={(e) => handleTileClicked(e)}
          ></div>
        </div>
      </div>
    </div>
  );
}
