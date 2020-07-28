import React from 'react';

export default function TickTackToe() {
  function tileClicked(e) {
    console.log('blah:', e.target.id);
  }

  return (
    <div className="tick-tack-toe-page">
      <h1>TickTackToe</h1>
      <div className="tick-tack-toe-board">
        <div
          id="1"
          className="board-tile"
          onClick={(e) => tileClicked(e)}
        ></div>
        <div
          id="2"
          className="board-tile"
          onClick={(e) => tileClicked(e)}
        ></div>
        <div
          id="3"
          className="board-tile"
          onClick={(e) => tileClicked(e)}
        ></div>
      </div>
    </div>
  );
}
