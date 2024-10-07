import React from 'react'
import './Header.scss'
import Logo from '../Logo/Logo'

function Header() {
  return (
    <div className="header">
      <Logo />
      <nav className="header__nav">
        <h2 className="header__nav-item">Home</h2>
        <h2 className="header__nav-item">About</h2>
        <h2 className="header__nav-item">Projects</h2>
        <h2 className="header__nav-item">Contact</h2>
      </nav>

    </div>
  )
}

export default Header