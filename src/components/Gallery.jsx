import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Data } from './Data';
import './css/gallery.css';

const Gallery = () => {
  const navigate = useNavigate();
  const { categoryId } = useParams();
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const selectedCategory = Data.find(category =>
    category.id.toString() === categoryId
  );

  if (!selectedCategory) {
    return (
      <div className="error-message">
        <div className="text-center py-6 text-3xl font-bold text-[#502D18]">
          Category not found
        </div>
        <button
          onClick={() => navigate(-1)}
          className="mb-4 px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg text-[#502D18]"
        >
          ← Back to Events
        </button>
      </div>
    );
  }

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedImageIndex(null);
  };

  const handlePrev = () => {
    setSelectedImageIndex((prev) => (prev === 0 ? selectedCategory.images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setSelectedImageIndex((prev) => (prev === selectedCategory.images.length - 1 ? 0 : prev + 1));
  };

  const currentImage = selectedCategory.images[selectedImageIndex];

  return (
    <section className="gallery-container">
      <h2 className="gallery-title">{selectedCategory.name1}</h2>

      <div className="image-grid gallery">
        {selectedCategory.images.map((item, index) => (
          <div
            key={item.id}
            className="gallery-item"
            onClick={() => handleImageClick(index)}
          >
            <img
              src={item.imgSrc}
              alt={item.imgTitle || `Image ${item.id}`}
              className="gallery-image"
              onError={(e) => {
                e.target.src = '/images/fallback.jpg';
                e.target.alt = 'Image not available';
              }}
            />
          </div>
        ))}
      </div>

      {showModal && currentImage && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeModal}>×</button>

            {/* Navigation Arrows */}
            <button className="nav-button prev-button" onClick={handlePrev}>←</button>
            <img
              src={currentImage.imgSrc}
              alt={currentImage.imgTitle || 'Preview'}
              className="modal-image"
            />
            <button className="nav-button next-button" onClick={handleNext}>→</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
