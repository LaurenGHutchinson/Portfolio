import React from 'react'
import './Header.scss'
import Logo from '../Logo/Logo'

function Header() {
  return (
    <div className="header">
      <Logo />
      <nav className="header__nav">
        <h3 className="header__nav-item">Home</h3>
        <h3 className="header__nav-item">About</h3>
        <h3 className="header__nav-item">Projects</h3>
        <h3 className="header__nav-item">Contact</h3>
      </nav>

    </div>
  )
}

export default Header