import React, { useState } from 'react';
import Peter from '../../images/TickTackToe/TileBoards/Peter-min.png';

export default function RPS() {
  const [userRPSSelection, setUserRPSSelection] = useState();
  const [computerRPSSelection, setComputerRPSSelection] = useState();

  const computerSelection = () => {
    const rpsOptions = ['rock', 'paper', 'scissors'];
    const randomSelection =
      rpsOptions[Math.floor(Math.random() * rpsOptions.length)];
    setComputerRPSSelection(randomSelection);
  };

  const handleRPSSelection = (e) => {
    const id = e.target.id;
    setUserRPSSelection(id);
    computerSelection();
  };

  return (
    <div className="rps-page-component">
      <h1 className="rps-header-text">Welcome to RPS</h1>
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
      <div>
        {userRPSSelection} vs {computerRPSSelection}
      </div>
    </div>
  );
}
