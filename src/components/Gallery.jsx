import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Data } from './Data';
import './css/gallery.css';

const Gallery = () => {
  const navigate = useNavigate();
  const { categoryId } = useParams();
  const [selectedImage, setSelectedImage] = useState(null);
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

  const handleImageClick = (item) => {
    setSelectedImage(item);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <section className="gallery-container">
      <h2 className="gallery-title">{selectedCategory.name1}</h2>

      <div className="image-grid gallery">
        {selectedCategory.images.map((item) => (
          <div
            key={item.id}
            className="gallery-item"
            onClick={() => handleImageClick(item)}
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
            {/* Optional: Show title */}
            {/* {item.imgTitle && <p className="image-title">{item.imgTitle}</p>} */}
          </div>
        ))}
      </div>

      {showModal && selectedImage && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeModal}>×</button>
            <img
              src={selectedImage.imgSrc}
              alt={selectedImage.imgTitle || 'Preview'}
              className="modal-image"
            />
            {/* <div className="image-details">
              <h3>{selectedImage.imgTitle}</h3>
              <p>{selectedImage.imgData}</p>
            </div> */}
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
