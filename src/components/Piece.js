import React from 'react'

const piece = props => {
    let className = 'circle red'
    if (props.isYellow) {
        className += ' yellow';
    }
    return (
        <div className={className}>&nbsp;</div>
    )
}

export default piece