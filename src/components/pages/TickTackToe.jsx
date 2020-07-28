import React, { useState } from 'react';

export default function TickTackToe() {
  const [tileClicked, setTileClicked] = useState(false);

  function handleTileClicked(e) {
    setTileClicked(!tileClicked);
    console.log('clicked ', tileClicked, 'ID:', e.target.id);
  }

  return (
    <div className="tick-tack-toe-page">
      <h1>TickTackToe</h1>
      <div className="tick-tack-toe-board">
        <div className="tile-row">
          <div
            id="1"
            className="board-tile"
            onClick={(e) => handleTileClicked(e)}
          ></div>
          <div
            id="2"
            className="board-tile"
            onClick={(e) => handleTileClicked(e)}
          ></div>
          <div
            id="3"
            className="board-tile"
            onClick={(e) => handleTileClicked(e)}
          ></div>
        </div>
      </div>
    </div>
  );
}
