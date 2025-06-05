import React from 'react';
import directorText from '../components/data/directorText';

const DirectorBoard = ({ currentLang }) => {
  const { title, members } = directorText[currentLang] || directorText.en;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-6 text-center">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {members.map(({ id, name, designation, img }) => (
          <div key={id} className="bg-white shadow rounded-lg p-4 text-center">
            <img
              src={img}
              alt={name}
              className="w-32 h-32 mx-auto rounded-full object-cover"
            />
            <h3 className="mt-4 font-semibold text-lg">{name}</h3>
            <p className="text-gray-600">{designation}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DirectorBoard;