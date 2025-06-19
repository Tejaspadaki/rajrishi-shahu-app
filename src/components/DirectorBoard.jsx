import React from 'react';
import directorText from '../components/data/directorText';
import './DirectorBoard.css'; // your custom CSS

const DirectorBoard = ({ currentLang }) => {
  const { title, members } = directorText[currentLang] || directorText.en;

  // Split members into rows of 3
  const chunkedMembers = [];
  for (let i = 0; i < members.length; i += 3) {
    chunkedMembers.push(members.slice(i, i + 3));
  }

  return (
    <div className="director-board">
      <h2 className="director-title">{title}</h2>

      {chunkedMembers.map((row, rowIndex) => (
        <div className="director-row" key={rowIndex}>
          {row.map(({ id, name, designation, img }) => (
            <div key={id} className="director-card">
              <div className="director-image-wrapper">
                <img src={img} alt={name} className="director-image" />
              </div>
              <h3 className="director-name">{name}</h3>
              <p className="director-designation">{designation}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default DirectorBoard;
