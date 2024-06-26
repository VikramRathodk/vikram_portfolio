import React from 'react';
import './card.css';

const Card = ({ image, title, description, techStack, link }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-img" />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
        <div className="card-links">
          <a href={link} target="_blank" rel="noopener noreferrer">Visit Project</a>
        </div>
        <ul className="tech-stack">
          {techStack.map((tech, index) => (
            <li key={index} className="tech-item">{tech}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Card;
