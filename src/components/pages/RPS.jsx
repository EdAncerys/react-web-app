import React from 'react';
import Peter from '../../images/TickTackToe/TileBoards/Peter-min.png';

export default function RPS() {
  const handleRPSSelection = (e) => {
    const id = e.target.id;
    console.log(id);
  };

  return (
    <div className="rps-page-component">
      <h1>Welcome to RPS</h1>
      <div className="rps-user-selection">
        <img
          id="rock"
          src={Peter}
          className="rps-img"
          onClick={(e) => handleRPSSelection(e)}
        ></img>
        <img
          id="paper"
          src={Peter}
          className="rps-img"
          onClick={(e) => handleRPSSelection(e)}
        ></img>
        <img
          id="scissors"
          src={Peter}
          className="rps-img"
          onClick={(e) => handleRPSSelection(e)}
        ></img>
      </div>
    </div>
  );
}
