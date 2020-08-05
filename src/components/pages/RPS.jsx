import React from 'react';
import Peter from '../../images/TickTackToe/TileBoards/Peter-min.png';

export default function RPS() {
  return (
    <div className="rps-page-component">
      <h1>Welcome to RPS</h1>
      <div className="rps-user-selection">
        <img id="rock" src={Peter} className="rps-img"></img>
        <img id="paper" src={Peter} className="rps-img"></img>
        <img id="scissors" src={Peter} className="rps-img"></img>
      </div>
    </div>
  );
}
