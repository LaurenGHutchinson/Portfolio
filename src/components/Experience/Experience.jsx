import React from 'react'
import './Experience.scss'
import {useState, useEffect} from 'react'
import educationData from '../../data/education.json'
import experienceData from '../../data/experience.json'
import skillsData from '../../data/skills.json'


function Experience() {

  const [selectedTopic, setSelectedTopic] = useState(skillsData[0].name);
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [category, setCategory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('Skills');

  const categories = ['Skills','Experience','Education']

  useEffect(() => {
    const skillSet = skillsData.filter((skill) => skill.name === selectedTopic)
    const skillSetArray = skillSet[0].skills;
    setSelectedSkills(skillSetArray)
  }, [selectedTopic])

  const handleClick = (e) => {
    setSelectedTopic(e.target.value);
    const skillSet = skillsData.filter((skill) => skill.name === selectedTopic)
    const skillSetArray = skillSet[0].skills;
    setSelectedSkills(skillSetArray)
  }

  const handleSectionClick = (e) => {
    const categoryValue = e.target.value;
    setSelectedCategory(categoryValue);
  };

  useEffect(()=>{
    if (selectedCategory === 'Education') {
      const categoryData = educationData;
      console.log(categoryData)
      setCategory(categoryData)
    }

    if(selectedCategory === 'Experience') {
      const categoryData = experienceData;
      console.log(categoryData)
      setCategory(categoryData)
    }
  },[selectedCategory])

  return (
    <>
      <div className="experience">
        <div className="svg-wrapper">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 192 700 200"
            preserveAspectRatio="none"
            className="svg-top"
            transform="scale(-1, 1)"
          >
            <path fill="#d8cfc4" fillOpacity="1" d="M0,192L1440,320L1440,320L0,320Z"></path>
          </svg>
        </div>
        <div className="experience__body">
          <h2 className="experience__title">Experience</h2>
          <div className="experience__list">
            {categories.map((category, index) => (
              <button
              key={category}
              className={`experience__item experience__item--${index + 1} h4`}
              value={category}
              onClick={handleSectionClick}
              >
                {category}
                </button>
            ))}
          </div>
          <div className={`button button-array ${selectedCategory === 'Education' || selectedCategory === 'Experience' ? 'invisible': ''}`}>
            {skillsData.map((skill)=> (
              <button
              key={skill.name}
              value={skill.name}
              onClick = {(e) => handleClick(e)}
              className="skill-button"
              >{skill.name}</button>
            ))}

          </div>
            <div className="experience__card">
              <div className="vertical">
                <h3 className="experience__card-title">{selectedCategory}</h3>
              </div>
              <div 
              className={`experience__card-list ${selectedCategory === 'Education' || selectedCategory === 'Experience' ? 'invisible': ''}`}
              >
                <h3 className="experience__skill-title">{selectedTopic}</h3>
                <ul>
                  {selectedSkills.map((skill, index) => (
                    <li key={index} 
                    className="experience__skill-item ">
                      <p>{skill}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div 
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
              </div>
            </div>
            </div>
          </div>
    </>
  )
}

export default Experience