'use strict';

class TicTacToe {
  constructor() {
    this.fields = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    this.player1 = [];
    this.player2 = [];
    this.gameTurn = true;
    this.winningFields = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      [1, 5, 9],
      [7, 5, 3],
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9],
    ];
    this.winner;
  }

  player1Fields() {
    return this.player1;
  }

  player2Fields() {
    return this.player2;
  }

  gameWinner() {
    return this.winner;
  }

  playGame(field) {
    if (this.gameTurn && this.fields.includes(field)) this.player1.push(field);
    if (!this.gameTurn && this.fields.includes(field)) this.player2.push(field);
    this._checkIfHaveWinner();
    this.fields = this.fields.filter((num) => num != field);
    this.gameTurn = !this.gameTurn;
  }

  _checkIfHaveWinner() {
    let player;
    if (this.gameTurn) player = this.player1;
    else player = this.player2;

    this.winningFields.forEach((combo) => {
      if (combo.every((field) => player.includes(field))) {
        this.winner = this._playerPicker();
      }
    });
  }

  _playerPicker() {
    return this.gameTurn ? 'Player1' : 'Player2';
  }
}
