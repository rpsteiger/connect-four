import React from 'react'
import Square from './Square'
import { checkIfWinningState, columns } from '../connectFour.js'
import { range } from '../functionalJS'
import { v4 as uuidv4 } from 'uuid';

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

    resetClickHandler = event => {
        this.setState({ squares: this.createArray() })
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
        <Square key={uuidv4()}
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
                {range(0, 6).map((index) => (
                    <div key={uuidv4()} className="board-row">
                        {range(0, 7).map((innerIndex) =>
                            this.renderSquare(innerIndex, index)
                        )}
                    </div>
                ))}
                <button onClick={this.resetClickHandler}>Reset</button>
            </div>
        )
    }
}