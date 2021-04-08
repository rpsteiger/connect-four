import React from 'react'
import Square from './Square'
import { checkIfWinningState, columns } from '../connectFour.js'

export default class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: this.createArray(),
            redIsNext: true
        }
    }

    createArray() {
        return Array(6).fill(null).map(() => Array(7).fill(null))
    }

    handleClick(x, y) {
        const squares = this.state.squares.slice();

        const clickedCollumn = columns(this.state.squares)[x]
        const lastPieceInCollumn = clickedCollumn.findIndex((x) => x !== null)
        const collPosition = lastPieceInCollumn === -1 ? 5 : lastPieceInCollumn - 1
        squares[collPosition][x] = this.state.redIsNext ? 'X' : 'O';

        this.setState({
            squares: squares,
            redIsNext: !this.state.redIsNext
        });
    }

    renderSquare = (x, y) => (
        <Square
            value={this.state.squares[y][x]}
            onClick={() => this.handleClick(x, y)}
        />
    )

    render() {
        let status
        let lastMover = this.state.redIsNext ? 'O' : 'X'
        if (checkIfWinningState(this.state.squares, lastMover)) {
            status = 'Winner: ' + (this.state.redIsNext ? 'yellow' : 'red');
        } else {
            status = 'Next player: ' + (this.state.redIsNext ? 'red' : 'yellow');
        }

        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0, 0)}
                    {this.renderSquare(1, 0)}
                    {this.renderSquare(2, 0)}
                    {this.renderSquare(3, 0)}
                    {this.renderSquare(4, 0)}
                    {this.renderSquare(5, 0)}
                    {this.renderSquare(6, 0)}
                </div>
                <div className="board-row">
                    {this.renderSquare(0, 1)}
                    {this.renderSquare(1, 1)}
                    {this.renderSquare(2, 1)}
                    {this.renderSquare(3, 1)}
                    {this.renderSquare(4, 1)}
                    {this.renderSquare(5, 1)}
                    {this.renderSquare(6, 0)}
                </div>
                <div className="board-row">
                    {this.renderSquare(0, 2)}
                    {this.renderSquare(1, 2)}
                    {this.renderSquare(2, 2)}
                    {this.renderSquare(3, 2)}
                    {this.renderSquare(4, 2)}
                    {this.renderSquare(5, 2)}
                    {this.renderSquare(6, 2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(0, 3)}
                    {this.renderSquare(1, 3)}
                    {this.renderSquare(2, 3)}
                    {this.renderSquare(3, 3)}
                    {this.renderSquare(4, 3)}
                    {this.renderSquare(5, 3)}
                    {this.renderSquare(6, 3)}
                </div>
                <div className="board-row">
                    {this.renderSquare(0, 4)}
                    {this.renderSquare(1, 4)}
                    {this.renderSquare(2, 4)}
                    {this.renderSquare(3, 4)}
                    {this.renderSquare(4, 4)}
                    {this.renderSquare(5, 4)}
                    {this.renderSquare(6, 4)}
                </div>
                <div className="board-row">
                    {this.renderSquare(0, 5)}
                    {this.renderSquare(1, 5)}
                    {this.renderSquare(2, 5)}
                    {this.renderSquare(3, 5)}
                    {this.renderSquare(4, 5)}
                    {this.renderSquare(5, 5)}
                    {this.renderSquare(6, 5)}
                </div>
            </div>
        )
    }
}