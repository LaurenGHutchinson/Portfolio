import React from 'react'
import './Header.scss'
import Logo from '../Logo/Logo'
import {Link} from 'react-scroll'

function Header() {
  return (
    <div className="header">
      <Logo />
      <nav className="header__nav">
        <Link to='Hero' smooth={true} duration={500}><h3 className="header__nav-item">Home</h3></Link>
        <Link to='about' smooth={true} duration={500}><h3 className="header__nav-item">About</h3></Link>
        <Link to='experience' smooth={true} duration={500}><h3 className="header__nav-item">Experience</h3></Link>
        <Link to='projects' smooth={true} duration={500}><h3 className="header__nav-item">Projects</h3></Link>
        <Link to='contact' smooth={true} duration={500}><h3 className="header__nav-item">Contact</h3></Link>
      </nav>

    </div>
  )
}

export default Header