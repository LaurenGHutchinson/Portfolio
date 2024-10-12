import React from 'react'
import './HeroText.scss'
import Logo from '../Logo/Logo'

function HeroText() {
  return (
    <div className="hero-text">
      <div className="hero-text__title-body">
        <h1 className="hero-text__title">Classic</h1>
        <h1 className="hero-text__title">by</h1>
        <h1 className="hero-text__title--modern">Modern</h1>
        <h1 className="hero-text__title--modern">Design</h1>
      </div>
      <div className="color-pallet">
        <div className="color-pallet--red"></div>
        <div className="color-pallet--brown"></div>
        <div className="color-pallet--slate"></div>
        <div className="color-pallet--taupe"></div>
        <div className="color-pallet--darkBrown"></div>
        <div className="color-pallet--lilac"></div>
        <div className="color-pallet--grey"></div>
      </div>
      <p className="hero-text__body">This is not your typical engineering portfolio. I take inspiration from the masters of the past, and surround myself with the beauty and depth of merging form and function. </p>

    </div>
  )
}

export default HeroText