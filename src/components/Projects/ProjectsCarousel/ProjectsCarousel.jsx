import { useState, useEffect } from 'react';
import './ProjectsCarousel.scss'
import projectData from '../../../data/projects.json'


function ProjectsCarousel({selectedSector}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [filteredProjects, setFilteredProjects] = useState([]); // State for filtered data

  useEffect(() => {
    const sectorToFilter = selectedSector || "Software Engineering";
    const projectsList = projectData.filter((project) => project.type === sectorToFilter);
    setFilteredProjects(projectsList);
    setActiveIndex(0);
  }, [selectedSector]);

  if (filteredProjects.length === 0) {
    return <p>Loading projects...</p>;
  }


  const nextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex ===  filteredProjects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ?  filteredProjects.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="projects-carousel">
        <p className="projects-carousel__text text-box">{filteredProjects[activeIndex].name}</p>
        <img className="projects-carousel__image" src={filteredProjects[activeIndex].img}/>
        <p><span className="projects-carousel__section">Description:</span>{filteredProjects[activeIndex].description}</p>
        <p><span className="projects-carousel__section">Skills:</span>{filteredProjects[activeIndex].skills}</p>
      <div className='buttons'>
        <button onClick={prevSlide} className="carousel__btn carousel__btn--prev">
            &lt;
        </button>
        <p>LEARN MORE</p>
        <button onClick={nextSlide} className="carousel__btn carousel__btn--next">
            &gt;
        </button>
      </div>
    </div>
  );
}

export default ProjectsCarousel;
