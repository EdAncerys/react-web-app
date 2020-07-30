import React, { useState, useEffect } from 'react';
import Hart from '../../../images/TickTackToe/hart.png';
import Cross from '../../../images/TickTackToe/cross.png';
import GameBoard from './GameBoard';
import PlayerChoice from './PlayerChoice';

export default function TickTackToe() {
  const winningFields = [
    ['1', '2', '3'],
    ['4', '5', '6'],
    ['7', '8', '9'],
    ['1', '5', '9'],
    ['7', '5', '3'],
    ['1', '4', '7'],
    ['2', '5', '8'],
    ['3', '6', '9'],
  ];
  const [takenTiles, setTakenTiles] = useState([]);
  const [playerOneTiles, setPlayerOneTiles] = useState([]);
  const [playerTwoTiles, setPlayerTwoTiles] = useState([]);
  const [winnerName, setWinnerName] = useState();

  const [playerOneTurn, setPlayerOneTurn] = useState(true);
  const [tileOneCSS, setTileOneCSS] = useState();
  const [tileTwoCSS, setTileTwoCSS] = useState();
  const [tileThreeCSS, setTileThreeCSS] = useState();
  const [tileForCSS, setTileForCSS] = useState();
  const [tileFiveCSS, setTileFiveCSS] = useState();
  const [tileSixCSS, setTileSixCSS] = useState();
  const [tileSevenCSS, setTileSevenCSS] = useState();
  const [tileEightCSS, setTileEightCSS] = useState();
  const [tileNineCSS, setTileNineCSS] = useState();

  // Save state to local storage
  const LOCAL_STORAGE_KEY = 'EdAncerys.TickTackToe';
  const saveToLocalStorage = {
    takenTiles: takenTiles,
    playerOneTiles: playerOneTiles,
    playerTwoTiles: playerTwoTiles,
    winnerName: winnerName,
    playerOneTurn: playerOneTurn,
    tileOneCSS: tileOneCSS,
    tileTwoCSS: tileTwoCSS,
    tileThreeCSS: tileThreeCSS,
    tileForCSS: tileForCSS,
    tileFiveCSS: tileFiveCSS,
    tileSixCSS: tileSixCSS,
    tileSevenCSS: tileSevenCSS,
    tileEightCSS: tileEightCSS,
    tileNineCSS: tileNineCSS,
  };

  useEffect(() => {
    const savedToJSON = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (savedToJSON != null) {
      setTakenTiles(JSON.parse(savedToJSON)['takenTiles']);
      setPlayerOneTiles(JSON.parse(savedToJSON)['playerOneTiles']);
      setPlayerTwoTiles(JSON.parse(savedToJSON)['playerTwoTiles']);
      setWinnerName(JSON.parse(savedToJSON)['winnerName']);
      setPlayerOneTurn(JSON.parse(savedToJSON)['playerOneTurn']);
      setTileOneCSS(JSON.parse(savedToJSON)['tileOneCSS']);
      setTileTwoCSS(JSON.parse(savedToJSON)['tileTwoCSS']);
      setTileThreeCSS(JSON.parse(savedToJSON)['tileThreeCSS']);
      setTileForCSS(JSON.parse(savedToJSON)['tileForCSS']);
      setTileFiveCSS(JSON.parse(savedToJSON)['tileFiveCSS']);
      setTileSixCSS(JSON.parse(savedToJSON)['tileSixCSS']);
      setTileSevenCSS(JSON.parse(savedToJSON)['tileSevenCSS']);
      setTileEightCSS(JSON.parse(savedToJSON)['tileEightCSS']);
      setTileNineCSS(JSON.parse(savedToJSON)['tileNineCSS']);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(saveToLocalStorage));
  }, [saveToLocalStorage]);

  const playerOneCSS = {
    background: 'none',
    border: '1px solid hsl(0, 100%, 50%)',
    backgroundImage: `url(${Hart})`,
    backgroundSize: 'cover',
  };
  const playerTwoCSS = {
    background: 'none',
    border: '1px solid hsl(50, 100%, 50%)',
    backgroundImage: `url(${Cross})`,
    backgroundSize: 'cover',
  };

  const cssStyle = playerOneTurn ? playerOneCSS : playerTwoCSS;
  const handleTileCSS = (id) => {
    if (id === '1') setTileOneCSS(cssStyle);
    if (id === '2') setTileTwoCSS(cssStyle);
    if (id === '3') setTileThreeCSS(cssStyle);
    if (id === '4') setTileForCSS(cssStyle);
    if (id === '5') setTileFiveCSS(cssStyle);
    if (id === '6') setTileSixCSS(cssStyle);
    if (id === '7') setTileSevenCSS(cssStyle);
    if (id === '8') setTileEightCSS(cssStyle);
    if (id === '9') setTileNineCSS(cssStyle);
  };

  const handleTakenTiles = (id) => {
    if (!takenTiles.includes(id) && !winnerName) {
      takenTiles.push(id);
      handleTileCSS(id);
      setPlayerOneTurn(!playerOneTurn);
      playerOneTurn ? playerOneTiles.push(id) : playerTwoTiles.push(id);
      handleGameWinner();
    }
  };

  const handleGameWinner = () => {
    let playerTiles;
    let playerName;
    if (playerOneTurn) {
      playerTiles = playerOneTiles;
      playerName = 'Player One Wins';
    } else {
      playerTiles = playerTwoTiles;
      playerName = 'Player Two Wins';
    }
    console.log(playerName, playerTiles);
    winningFields.forEach((combo) => {
      console.log('hello');
      if (combo.every((tiles) => playerTiles.includes(tiles))) {
        setWinnerName(playerName);
      }
    });
  };

  const handleTileClicked = (e) => {
    const id = e.target.id;
    handleTakenTiles(id);
    // console.log(playerOneTiles, playerTwoTiles);
  };

  const restartGame = () => {
    setTakenTiles([]);
    setPlayerOneTiles([]);
    setPlayerTwoTiles([]);
    setPlayerOneTurn(true);
    setWinnerName();
    setTileOneCSS();
    setTileTwoCSS();
    setTileThreeCSS();
    setTileForCSS();
    setTileFiveCSS();
    setTileSixCSS();
    setTileSevenCSS();
    setTileEightCSS();
    setTileNineCSS();
  };

  const gameOverCondition = takenTiles.length === 9 || winnerName;

  return (
    <div className="tick-tack-toe-page">
      <h1>TickTackToe</h1>
      <PlayerChoice playerOneTurn={playerOneTurn} />
      {/* <div className="feature-img-container">
        <img className="feature-img" alt="TikTacToeLogo" src={Stewie01} />
      </div> */}
      {!gameOverCondition && (
        <p>{playerOneTurn ? 'Player One Move' : 'Player Two Move'}</p>
      )}
      <p>{winnerName}</p>
      <div className="tick-tack-toe-board">
        <GameBoard
          tileOneCSS={tileOneCSS}
          tileTwoCSS={tileTwoCSS}
          tileThreeCSS={tileThreeCSS}
          tileForCSS={tileForCSS}
          tileFiveCSS={tileFiveCSS}
          tileSixCSS={tileSixCSS}
          tileSevenCSS={tileSevenCSS}
          tileEightCSS={tileEightCSS}
          tileNineCSS={tileNineCSS}
          handleTileClicked={handleTileClicked}
        />
      </div>
      <div>
        {gameOverCondition && (
          <button
            onClick={restartGame}
            className="btn btn-danger"
            variant="danger"
          >
            Start Again
          </button>
        )}
      </div>
    </div>
  );
}
