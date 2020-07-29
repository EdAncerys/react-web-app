import React from 'react';

export default function BoardRow(props) {
  return (
    <div className="tile-row">
      <div
        id="1"
        style={props.tileOneCSS}
        className="board-tile"
        onClick={(e) => props.handleTileClicked(e)}
      ></div>
      <div
        id="2"
        style={props.tileTwoCSS}
        className="board-tile"
        onClick={(e) => props.handleTileClicked(e)}
      ></div>
      <div
        id="3"
        style={props.tileThreeCSS}
        className="board-tile"
        onClick={(e) => props.handleTileClicked(e)}
      ></div>
    </div>
  );
}
