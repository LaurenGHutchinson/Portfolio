import React from 'react'
import './About.scss'
import Picture from '../../assets/lauren-profile-square.png'
import Carousel from './Carousel/Carousel'


function About() {
  return (
    <div id="about" className="about__body">
      <div className="about__intro">
        <img className="about__picture" src={Picture} />
        <div className="about__right-content">
          <div className="about__intro-name">
            <p className="about__intro-line first-line"> Hi,</p>
            <div className="about__intro-text">
              <p className="about__intro-line"> My name is <span>Lauren Hutchinson</span></p>
            </div>
          </div>
          <div>
            <p className="about__tablet-text">I’m a mechanical engineer turned full stack software developer, passionate about blending technical precision with artistic design. With experience guiding projects from concept to production, I now focus on creating efficient, user-friendly digital solutions. Inspired by the Renaissance, I believe great design is where form and function meet to create beautiful, impactful experiences.</p>
          </div>
          <div className="about__desktop-carousel">
            <Carousel />
          </div>
        </div>
      </div>
      {/* <Carousel /> */}


      </div>
  )
}

export default About