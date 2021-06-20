import React from 'react'
import PropTypes from 'prop-types'

const clickEvent = () => {
    console.log('Click!');
}

const Button = ({color, text, onClick }) => {
    return (
        <button className="btn" onClick={onClick} style={{ backgroundColor: color }}>
            {text}
        </button>
    )
}

Button.defaultProps ={
    color: 'steelBlue',
    onClick: clickEvent
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func
}

export default Button
