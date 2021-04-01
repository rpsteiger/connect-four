import React from 'react'
import Piece from './Piece'

const square = (props) => {
    let piece = null;
    if (props.value === 'X' || props.value === 'O') {
        piece = <Piece isYellow={props.value === 'O'}></Piece>
    }
    return (
        <button className='square' onClick={props.onClick}>
            {piece}
        </button>
    );
}

export default square