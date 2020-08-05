import React from 'react';
import Peter from '../../images/TickTackToe/TileBoards/Peter-min.png';

export default function RPS() {
  return (
    <div className="rps-page-component">
      <h1>Welcome to RPS</h1>
      <div className="rps-user-selection">
        <img src={Peter}></img>
        <img src={Peter}></img>
        <img src={Peter}></img>
      </div>
    </div>
  );
}
