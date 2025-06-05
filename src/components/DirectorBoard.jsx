import React from 'react';
import './DirectorBoard.css';
import directorText from '../components/data/directorText';

const DirectorBoard = ({ currentLang }) => {
  const { title, members } = directorText[currentLang] || directorText.en;

  return (
    <div className="director-board">
      <h2 className="director-title">{title}</h2>

      {/* First row: 4 cards */}
      <div className="director-row">
        {members.slice(0, 4).map(({ id, name, designation, img }) => (
          <div key={id} className="director-card">
            <div className="director-image-wrapper">
              <img src={img} alt={name} className="director-image" />
            </div>
            <h3 className="director-name">{name}</h3>
            <p className="director-designation">{designation}</p>
          </div>
        ))}
      </div>

      {/* Second row: 3 cards */}
      <div className="director-row">
        {members.slice(4, 7).map(({ id, name, designation, img }) => (
          <div key={id} className="director-card">
            <div className="director-image-wrapper">
              <img src={img} alt={name} className="director-image" />
            </div>
            <h3 className="director-name">{name}</h3>
            <p className="director-designation">{designation}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DirectorBoard;
