import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header style={headerStyle}>
            <h1>Activities Planner</h1>
            <Link style={linkStyle} to="/">Home</Link>
            <Link style={linkStyle} to="/about">About</Link>
        </header>
    )
}

const linkStyle = {
    color: '#fff',
    textDecoration: 'none',
    padding: '10px'
}

const headerStyle = {
    background: '#ffcccc',
    color: '#bf00ff',
    textAlign: 'center',
    padding: '10px'
}

export default Header;