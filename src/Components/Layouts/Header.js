import React from 'react'

function Header() {
    return ( < header style = { headerStyle } > < h1 > TodoList < /h1>< /header > )
}

const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px',
    fontSize: '1.5em',
    marginLeft: '40px',
    marginRight: '40px',
    borderRadius: '5px'
}

export default Header;