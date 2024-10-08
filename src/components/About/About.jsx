import React from 'react'
import './About.scss'
import Picture from '../../assets/Lauren-profile-square.png'
import Carousel from './Carousel/Carousel'


function About() {
  return (
    <div className="about__body">
      <div className="about__intro">
        <img className="about__picture" src={Picture} />
        <div className="about__intro-name">
          <p className="about__intro-line first-line"> Hi,</p>
          <p className="about__intro-line"> My name</p>
          <p className="about__intro-line"> is</p>
          <p className="about__intro-line"> Lauren</p>
          <p className="about__intro-line"> Hutchinson</p>
        </div>
      </div>
      <Carousel />


      </div>
  )
}

export default About