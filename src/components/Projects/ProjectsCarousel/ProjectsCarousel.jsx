import { useState, useEffect } from 'react';
import './ProjectsCarousel.scss'
import projectData from '../../../data/projects.json'


function ProjectsCarousel({selectedSector}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [filteredProjects, setFilteredProjects] = useState([]); // State for filtered data
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const sectorToFilter = selectedSector || "Software Engineering";
    const projectsList = projectData.filter((project) => project.type === sectorToFilter);
    setFilteredProjects(projectsList);
    setActiveIndex(0);
    setImageIndex(0);
  }, [selectedSector]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (filteredProjects.length > 0) {
        const currentImages = filteredProjects[activeIndex].img;
        setImageIndex((prevImageIndex) =>
          prevImageIndex === currentImages.length - 1 ? 0 : prevImageIndex + 1
        );
      }
    }, 5000); // Change the interval time (3000ms = 3 seconds)

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [filteredProjects, activeIndex]);

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

  const currentProject = filteredProjects[activeIndex];

  return (
    <div className="projects-carousel">
        <p className="projects-carousel__text text-box">{currentProject.name}</p>
        <div className="projects-carousel__image-container"> 
          <img className="projects-carousel__image" src={currentProject.img[imageIndex]}/>
        </div>
        <p><span className="projects-carousel__section">Description:<br/></span>{currentProject.description}</p>
        <p><span className="projects-carousel__section">Skills:<br/></span>{currentProject.skills}</p>
      <div className='buttons'>
        <button onClick={prevSlide} className="projects-carousel__btn carousel__btn--prev">
            &lt;
        </button>
        <p></p>
        <button onClick={nextSlide} className="projects-carousel__btn carousel__btn--next">
            &gt;
        </button>
      </div>
    </div>
  );
}

export default ProjectsCarousel;
