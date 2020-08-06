import React, { useState } from 'react';
import Rock from '../../images/RPS/rock-min.png';
import Paper from '../../images/RPS/paper-min.png';
import Scissors from '../../images/RPS/scissors-min.png';
import PlayerChoiceComponent from '../content/RPSComponent/PlayerChoiceComponent';
import GameWinnerContainer from '../content/RPSComponent/GameWinnerContainer';

export default function RPS() {
  const [userRPSSelection, setUserRPSSelection] = useState();
  const [computerRPSSelection, setComputerRPSSelection] = useState();
  const [userScore, setUserScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [evenScore, setEvenScore] = useState(0);
  const [gameWinner, setGameWinner] = useState();

  const rps = {
    rock: Rock,
    paper: Paper,
    scissors: Scissors,
    userRPSSelection: userRPSSelection,
    computerRPSSelection: computerRPSSelection,
    gameWinner: gameWinner,
  };

  const computerSelection = () => {
    const rpsOptions = ['rock', 'paper', 'scissors'];
    const randomSelection =
      rpsOptions[Math.floor(Math.random() * rpsOptions.length)];
    setComputerRPSSelection(randomSelection);
  };

  const handleRPSClick = (e) => {
    const id = e.target.id;
    setUserRPSSelection(id);
    computerSelection();
    setRPSWinner(userRPSSelection, computerRPSSelection);
  };

  const resetGame = () => {
    setUserRPSSelection();
    setComputerRPSSelection();
    setGameWinner();
  };

  const setRPSWinner = (player, computer) => {
    let winner;
    if (
      (player === 'rock' && computer === 'rock') ||
      (player === 'paper' && computer === 'paper') ||
      (player === 'scissors' && computer === 'scissors')
    ) {
      winner = 'Even Steven';
      setEvenScore(evenScore + 1);
    } else if (
      (player === 'rock' && computer !== 'paper') ||
      (player === 'paper' && computer !== 'scissors') ||
      (player === 'scissors' && computer !== 'rock')
    ) {
      winner = 'User Wins';
      setUserScore(userScore + 1);
    } else {
      winner = 'Computer Wins';
      setComputerScore(computerScore + 1);
    }
    setGameWinner(winner);
  };

  return (
    <div className="rps-page-component">
      <h1 className="rps-header-text">Welcome to RPS</h1>
      <p className="rps-main-text">
        Player {userScore} & Computer {computerScore} & Even {evenScore}
      </p>
      {!userRPSSelection && (
        <PlayerChoiceComponent rps={rps} handleRPSClick={handleRPSClick} />
      )}
      {userRPSSelection && (
        <GameWinnerContainer
          rps={rps}
          handleRPSClick={handleRPSClick}
          resetGame={resetGame}
        />
      )}
    </div>
  );
}
