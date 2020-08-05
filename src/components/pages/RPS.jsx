import React, { useState } from 'react';
import Peter from '../../images/TickTackToe/TileBoards/Peter-min.png';

export default function RPS() {
  const [userRPSSelection, setUserRPSSelection] = useState();
  const [computerRPSSelection, setComputerRPSSelection] = useState();
  const [userScore, setUserScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [gameWinner, setGameWinner] = useState();

  const computerSelection = () => {
    const rpsOptions = ['rock', 'paper', 'scissors'];
    const randomSelection =
      rpsOptions[Math.floor(Math.random() * rpsOptions.length)];
    setComputerRPSSelection(randomSelection);
    return randomSelection;
  };

  const scoreCount = () => {
    if (gameWinner === 'User Wins') setUserScore(userScore + 1);
    if (gameWinner === 'Computer Wins') setComputerScore(computerScore + 1);
  };

  const handleRPSClick = (e) => {
    const id = e.target.id;
    setUserRPSSelection(id);
    setRPSWinner(id, computerSelection());
    scoreCount();
  };

  const setRPSWinner = (player, computer) => {
    let winner;
    if (
      (player === 'rock' && computer === 'rock') ||
      (player === 'paper' && computer === 'paper') ||
      (player === 'scissors' && computer === 'scissors')
    ) {
      winner = 'Even Steven';
    } else if (
      (player === 'rock' && computer !== 'paper') ||
      (player === 'paper' && computer !== 'scissors') ||
      (player === 'scissors' && computer !== 'rock')
    ) {
      winner = 'User Wins';
    } else winner = 'Computer Wins';
    setGameWinner(winner);
  };

  return (
    <div className="rps-page-component">
      <h1 className="rps-header-text">Welcome to RPS</h1>
      <p>
        Player {userScore} : Computer {computerScore}
      </p>
      <div className="rps-user-selection">
        <img
          id="rock"
          src={Peter}
          className="rps-img"
          alt="rock-img"
          onClick={(e) => handleRPSClick(e)}
        ></img>
        <img
          id="paper"
          src={Peter}
          className="rps-img"
          alt="paper-img"
          onClick={(e) => handleRPSClick(e)}
        ></img>
        <img
          id="scissors"
          src={Peter}
          className="rps-img"
          alt="scissors-img"
          onClick={(e) => handleRPSClick(e)}
        ></img>
      </div>
      <div>
        {userRPSSelection} vs {computerRPSSelection}
      </div>
      <div>{gameWinner}</div>
    </div>
  );
}
