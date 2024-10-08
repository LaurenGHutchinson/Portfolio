import { useState, useEffect } from 'react';
import './Carousel.scss'

function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0); // Corrected useState syntax
  const [activeText, setActiveText] = useState(); // Corrected useState syntax
  const [initialHeadline, setInitialHeadline] = useState();

  const aboutText = [
    'I’m a mechanical engineer turned full stack software developer, passionate about blending technical precision with artistic design. With experience guiding projects from concept to production, I now focus on creating efficient, user-friendly digital solutions. Inspired by the Renaissance, I believe great design is where form and function meet to create beautiful, impactful experiences.',
    `I am a mechanical engineer turned full stack software engineer, with a passion for creating functional, intricate pieces that blend technical precision and artistic beauty. During my time as a mechanical engineer, I had the opportunity to see projects through all stages of development— from problem definition and concept generation to prototyping, iteration, and final production. This hands-on experience honed my ability to approach challenges from every angle, ensuring that the solutions I create are both effective and refined. However, my love for problem solving, conceptual thinking, and pushing boundaries led me to the digital realm, where software development became my new canvas.`,
    "Inspired by the Renaissance—an era that celebrated the fusion of art, science, and innovation—I aspire to have my work embody that same spirit. Whether it's crafting elegant code or developing user-centric web applications, I strive to combine both artistry and engineering in everything I create.",
    "This portfolio is a reflection of my belief that great design is not just about functionality, but about the experience it offers, and how form and function can come together to create something truly beautiful and impactful."
  ];
  useEffect(() => {
    setActiveText(aboutText[activeIndex]); 
  }, [activeIndex]); 

  const nextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === aboutText.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? aboutText.length - 1 : prevIndex - 1
    );
  };
  

  return (
    <div className="carousel">
        <p className={`carousel__initial-text ${activeIndex != 0 ? 'invisible': ''}`}>Long Story Short</p>
        <p className="carousel__text text-box">{activeText}</p>
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

export default Carousel;
