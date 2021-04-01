import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Board from './components/Board.js'

const game = props => (
    <div className="game">
        <div className="game-board">
            <Board />
        </div>
        <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
        </div>
    </div>
)
const Game = game

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);
