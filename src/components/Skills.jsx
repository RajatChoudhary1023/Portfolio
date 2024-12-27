import React from 'react';
import './Skills.css';
import reacticon from '../logos/react-removebg-preview.png'
import expressicon from '../logos/express-removebg-preview-removebg-preview.png'
import htmlicon from '../logos/html2-removebg-preview.png'
import cssicon from '../logos/[removal.ai]_a160c326-e0e5-4a1d-9594-94fb1346602d-css.png'
import javascripticon from '../logos/javascript-removebg-preview.png'
import nodeicon from '../logos/download-removebg-preview (1).png'
import mysqlicon from '../logos/mysql2-removebg-preview.png'
import pythonicon from '../logos/python2-removebg-preview.png'
import tailwindicon from '../logos/tailwind-removebg-preview.png'
import cppicon from '../logos/images-removebg-preview.png'
import figmaicon from '../logos/figma2-removebg-preview.png'
import mongodbicon from '../logos/mongodb-removebg-preview.png'
const skills = [
  { name: "React.js", image: reacticon },
  { name: "MongoDB", image: mongodbicon },
  { name: "Express.js", image: expressicon },
  { name: "Node.js", image: nodeicon },
  { name: "HTML", image: htmlicon },
  { name: "CSS", image: cssicon },
  { name: "Tailwind CSS", image: tailwindicon },
  { name: "JavaScript", image: javascripticon },
  { name: "Figma", image: figmaicon },
  { name: "MySQL", image: mysqlicon },
  { name: "Python", image: pythonicon },
  { name: "C++", image: cppicon },
];

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">
        <h2 className="skills-title">Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              <img src={skill.image} alt={`${skill.name} logo`} className="skill-icon" />
              <p className="skill-name">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
