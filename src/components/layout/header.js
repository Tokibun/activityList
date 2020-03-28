import React from 'react';

function Header() {
    return (
        <header style={headerStyle}>
            <h1>Activities</h1>
        </header>
    )
}

const headerStyle = {
    background: '#ffcccc',
    color: '#bf00ff',
    textAlign: 'center',
    padding: '10px'
}

export default Header;