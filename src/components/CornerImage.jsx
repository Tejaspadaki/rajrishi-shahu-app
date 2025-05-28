import React from 'react';

const CornerImage = ({ position, image, alt, labelEn, labelMr, currentLang }) => {
  // position is like "top-left move" => we split it to multiple classes
  const positionClasses = position.split(' ').join(' ');

  return (
    <div className={`corner-image ${positionClasses} show`}>
      <img src={image} alt={alt} />
      <div className="label">{currentLang === 'en' ? labelEn : labelMr}</div>
    </div>
  );
};

export default CornerImage;
