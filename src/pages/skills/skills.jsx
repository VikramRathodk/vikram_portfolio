import React from 'react';
import './skills.css';

const Skills = () => {
  const skills = [
    { category: 'Programming Languages', list: ['JavaScript (ES6+)', 'Python', 'Java', 'C++'] },
    { category: 'Front-End Development', list: ['React', 'HTML & CSS', 'Redux', 'Bootstrap'] },
    { category: 'Back-End Development', list: ['Node.js', 'Express', 'Django', 'Spring Boot'] },
    { category: 'Mobile Development', list: ['React Native', 'Swift', 'Kotlin', 'Flutter'] },
    { category: 'Web Development', list: ['ASP.NET', 'PHP', 'Ruby on Rails', 'Vue.js'] },
    { category: 'Databases', list: ['MongoDB', 'SQL', 'PostgreSQL', 'Firebase'] },
  ];


  return (
    <div className="skills-container">
      <div className="skills-content">
        {skills.map((skillCategory, index) => (
          <div key={index} className="skill-category">
            <h2>{skillCategory.category}</h2>
            <ul className="skills-list">
              {skillCategory.list.map((skill, index) => (
                <li key={index} className="skill-item">{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>     
    </div>
  );
};

export default Skills;
