import React from 'react'
import './Projects.scss'
import {useState, useEffect} from 'react'


function Projects() {
  const [category, setCategory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('Skills');

  const categories = ['Software Engineering','Mechanical','Art'];

  const handleSectionClick = (e) => {
    const categoryValue = e.target.value;
    setSelectedCategory(categoryValue);
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
        <div className="projects">

        <h2 className="projects__title">Projects</h2>
        <div className="projects__list">
            {categories.map((category, index) => (
              <button
              key={category}
              className={`projects__item projects-button projects__item--${index + 1} h4`}
              value={category}
              onClick={handleSectionClick}
              >
                {category}
                </button>
            ))}
          </div>
        </div>

      </div>
    </>
  )
}

export default Projects