import React, { useState } from 'react';

export default function TickTackToe() {
  const [takenTiles, setTakenTiles] = useState([]);
  const [playerOneTurn, setPlayerOneTurn] = useState(true);
  const [tileOneCSS, setTileOneCSS] = useState('board-tile');
  const [tileTwoCSS, setTileTwoCSS] = useState();
  const [tileThreeCSS, setTileThreeCSS] = useState();

  const playerOneCSS = 'board-tile tile-x';
  const playerTwoCSS = 'board-tile tile-o';

  const handleTakenTiles = (id) => {
    if (!takenTiles.includes(id)) {
      takenTiles.push(id);
      handleTileCSS(id);
      setPlayerOneTurn(!playerOneTurn);
    }
  };

  const handleTileCSS = (id) => {
    if (id == 1) setTileOneCSS(playerOneTurn ? playerOneCSS : playerTwoCSS);
    if (id == 2) setTileTwoCSS(playerOneTurn ? playerOneCSS : playerTwoCSS);
    if (id == 3) setTileThreeCSS(playerOneTurn ? playerOneCSS : playerTwoCSS);
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
            className={tileOneCSS}
            onClick={(e) => handleTileClicked(e)}
          ></div>
          <div
            id="2"
            className={`board-tile tile-${tileTwoCSS}`}
            onClick={(e) => handleTileClicked(e)}
          ></div>
          <div
            id="3"
            className={`board-tile tile-${tileThreeCSS}`}
            onClick={(e) => handleTileClicked(e)}
          >
            &#10060;
          </div>
        </div>
      </div>
    </div>
  );
}
