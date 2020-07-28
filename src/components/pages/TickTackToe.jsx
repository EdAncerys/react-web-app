import React, { useState } from 'react';

export default function TickTackToe() {
  const [tileClicked, setTileClicked] = useState(false);
  const [playerOneTurn, setPlayerOneTurn] = useState(true);
  const [tileOneCSS, setTileOneCSS] = useState('board-tile');
  const [tileTwoCSS, setTileTwoCSS] = useState();
  const [tileThreeCSS, setTileThreeCSS] = useState();

  const handleTileClicked = (e) => {
    setTileClicked(!tileClicked);
    setPlayerOneTurn(!playerOneTurn);
    if (e.target.id == 1)
      setTileOneCSS(playerOneTurn ? 'board-tile tile-x' : 'board-tile tile-o');
    console.log(
      'clicked ',
      tileClicked,
      'ID:',
      e.target.id,
      'className ' + e.target.className
    );
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
