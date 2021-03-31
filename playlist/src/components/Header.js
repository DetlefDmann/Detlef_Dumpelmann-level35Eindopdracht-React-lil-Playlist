import React from 'react'
import logo from '.././logo.svg';

const Header = () => {
    return (
        <header className="App__header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>My Favorite Songs</h1>
      </header>
    )
}

export default Header
