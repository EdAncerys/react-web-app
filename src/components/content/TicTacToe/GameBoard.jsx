import React from 'react';

export default function BoardRow(props) {
  return (
    <React.Fragment>
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
      <div className="tile-row">
        <div
          id="4"
          style={props.tileForCSS}
          className="board-tile"
          onClick={(e) => props.handleTileClicked(e)}
        ></div>
        <div
          id="5"
          style={props.tileFiveCSS}
          className="board-tile"
          onClick={(e) => props.handleTileClicked(e)}
        ></div>
        <div
          id="6"
          style={props.tileSixCSS}
          className="board-tile"
          onClick={(e) => props.handleTileClicked(e)}
        ></div>
      </div>
      <div className="tile-row">
        <div
          id="7"
          style={props.tileSevenCSS}
          className="board-tile"
          onClick={(e) => props.handleTileClicked(e)}
        ></div>
        <div
          id="8"
          style={props.tileEightCSS}
          className="board-tile"
          onClick={(e) => props.handleTileClicked(e)}
        ></div>
        <div
          id="9"
          style={props.tileNineCSS}
          className="board-tile"
          onClick={(e) => props.handleTileClicked(e)}
        ></div>
      </div>
    </React.Fragment>
  );
}
