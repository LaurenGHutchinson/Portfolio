import React from 'react'
import './Projects.scss'
import {useState, useEffect} from 'react'
import ProjectsCarousel from './ProjectsCarousel/ProjectsCarousel'


function Projects() {

  const [selectedSector, setSelectedSector] = useState('Software Engineering');

  const sectors = ['Software Engineering','Mechanical Engineering','Art'];

  const handleSectionClick = (e) => {
    const sectorValue = e.target.value;
    setSelectedSector(sectorValue);
  };

  return (
    <>
      <div className="projects">
        <div className="svg-wrapper">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 192 700 200"
            preserveAspectRatio="none"
            className="svg-top"
          >
            <path fill="#7d3030" fillOpacity="1" d="M0,192L1440,320L1440,320L0,320Z"></path>
          </svg>
        </div>
        <div className="projects__body">

        <h2 className="projects__title">Projects</h2>
        <div className="projects__list">
            {sectors.map((sector, index) => (
              <button
              key={sector}
              className={`projects__item projects-button projects__item--${index + 1} h4`}
              value={sector}
              onClick={handleSectionClick}
              >
                {sector}
                </button>
            ))}
          </div>
          <div className="projects__card">
              <div className="vertical">
                <h3 className="projects__card-title">{selectedSector}</h3>
              </div>
              {/* <img className="projects__image"src={projectData[0].img}/> */}
              <ProjectsCarousel selectedSector={selectedSector}/>
              {/* <div 
              className={`experience__card-list ${selectedCategory === 'Skills' ? 'invisible': ''}`}
              >
                <h3 className="experience__skill-title">{selectedCategory}</h3>
                <ul>
                  {category.map((item, index) => (
                    <li key={index} 
                    className="experience__skill-item ">
                      <p className="experience__skill-company">{item.company}</p>
                      <p className="experience__skill-role">{item.role}</p>
                      <p className="experience__skill-company">{item.institute}</p>
                      <p className="experience__skill-role">{item.program}</p>
                      <p className="experience__skill-date">{item.time}</p>
                    </li>
                  ))}
                </ul>
              </div> */}
            </div>
        </div>

      </div>
    </>
  )
}

export default Projects