import React, { useState } from 'react';
import Hart from '../../../images/TickTackToe/hart.png';
import Cross from '../../../images/TickTackToe/cross.png';
import BoardRow from './GameBoard';

export default function TickTackToe() {
  const [takenTiles, setTakenTiles] = useState([]);
  const [winnerName, setWinnerName] = useState('No one');

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

  // TikTackToe game

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

  const handleTileCSS = (id) => {
    if (id === '1') setTileOneCSS(playerOneTurn ? playerOneCSS : playerTwoCSS);
    if (id === '2') setTileTwoCSS(playerOneTurn ? playerOneCSS : playerTwoCSS);
    if (id === '3')
      setTileThreeCSS(playerOneTurn ? playerOneCSS : playerTwoCSS);
    if (id === '4') setTileForCSS(playerOneTurn ? playerOneCSS : playerTwoCSS);
    if (id === '5') setTileFiveCSS(playerOneTurn ? playerOneCSS : playerTwoCSS);
    if (id === '6') setTileSixCSS(playerOneTurn ? playerOneCSS : playerTwoCSS);
    if (id === '7')
      setTileSevenCSS(playerOneTurn ? playerOneCSS : playerTwoCSS);
    if (id === '8')
      setTileEightCSS(playerOneTurn ? playerOneCSS : playerTwoCSS);
    if (id === '9') setTileNineCSS(playerOneTurn ? playerOneCSS : playerTwoCSS);
  };

  const handleTakenTiles = (id) => {
    if (!takenTiles.includes(id)) {
      takenTiles.push(id);
      handleTileCSS(id);
      setPlayerOneTurn(!playerOneTurn);
    }
  };

  const handleTileClicked = (e) => {
    handleTakenTiles(e.target.id);
  };

  const restartGame = () => {
    setTakenTiles([]);
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

  return (
    <div className="tick-tack-toe-page">
      <h1>Family Guy TickTackToe</h1>
      {/* <div className="feature-img-container">
        <img className="feature-img" alt="TikTacToeLogo" src={Stewie01} />
      </div> */}
      <p>{winnerName}</p>
      <div className="tick-tack-toe-board">
        <BoardRow
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
        <button
          onClick={restartGame}
          className="btn btn-danger"
          variant="danger"
        >
          Start Again
        </button>
      </div>
    </div>
  );
}
