import React from 'react';

export default function GameText(props) {
  const textPrintToDOM = () => {
    let text;
    if (!props.gameOverCondition) {
      props.playerOneTurn
        ? (text = `${props.playerOneChoice['id']} make a move`)
        : (text = `${props.playerTwoChoice['id']} make a move`);
    }
    if (props.gameOverCondition) text = props.winnerName;
    if (!props.winnerName && props.takenTiles.length === 9)
      text = 'Even Steven';
    return text;
  };

  return (
    <React.Fragment>
      <p className="main-ticktacktoe-text">{textPrintToDOM()}</p>
    </React.Fragment>
  );
}
