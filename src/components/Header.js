import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title, onAdd, toggleBtnStyle}) => {
    return (
        <header className='header'>
            <h1> {title} </h1>
            <Button color={toggleBtnStyle?'red' : 'green'} text={!toggleBtnStyle?'Add Task' : 'Hide Form'} onClick={onAdd}/>
        </header>
    )
}

Header.propTypes = {
    title: PropTypes.string
}
Header.defaultProps = {
    title: 'Task Tracker'
}

export default Header
