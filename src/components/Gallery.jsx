// import React, { useEffect, useRef, useState } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';
// import { Data } from './Data';
// import './css/gallery.css';

// const Gallery = ({ language = 'mr' }) => {
//   const navigate = useNavigate();
//   const { categoryId } = useParams();

//   const [selectedImageIndex, setSelectedImageIndex] = useState(null);
//   const [showModal, setShowModal] = useState(false);

//   const scrollRef = useRef(null);
//   const isDragging = useRef(false);
//   const startX = useRef(0);
//   const scrollLeft = useRef(0);

//   const selectedCategory = Data.find(category => category.id.toString() === categoryId);

//   if (!selectedCategory) {
//     return (
//       <div className="error-message">
//         <div className="text-center py-6 text-3xl font-bold text-[#502D18]">
//           {language === 'mr' ? 'वर्ग सापडला नाही' : 'Category not found'}
//         </div>
//         <button
//           onClick={() => navigate(-1)}
//           className="mb-4 px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg text-[#502D18]"
//         >
//           ← {language === 'mr' ? 'कार्यक्रमांकडे परत जा' : 'Back to Events'}
//         </button>
//       </div>
//     );
//   }

//   useEffect(() => {
//     const scrollContainer = scrollRef.current;
//     if (!scrollContainer) return;

//     let animationFrameId;
//     let speed = 0.5;

//     const step = () => {
//       if (!isDragging.current) {
//         scrollContainer.scrollLeft += speed;
//         if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
//           scrollContainer.scrollLeft = 0;
//         }
//       }
//       animationFrameId = requestAnimationFrame(step);
//     };

//     animationFrameId = requestAnimationFrame(step);
//     return () => cancelAnimationFrame(animationFrameId);
//   }, []);

//   const onMouseDown = (e) => {
//     isDragging.current = true;
//     startX.current = e.pageX - scrollRef.current.offsetLeft;
//     scrollLeft.current = scrollRef.current.scrollLeft;
//   };

//   const onMouseLeave = () => { isDragging.current = false; };
//   const onMouseUp = () => { isDragging.current = false; };
//   const onMouseMove = (e) => {
//     if (!isDragging.current) return;
//     e.preventDefault();
//     const x = e.pageX - scrollRef.current.offsetLeft;
//     const walk = (x - startX.current) * 2;
//     scrollRef.current.scrollLeft = scrollLeft.current - walk;
//   };

//   const onTouchStart = (e) => {
//     isDragging.current = true;
//     startX.current = e.touches[0].pageX - scrollRef.current.offsetLeft;
//     scrollLeft.current = scrollRef.current.scrollLeft;
//   };
//   const onTouchEnd = () => { isDragging.current = false; };
//   const onTouchMove = (e) => {
//     if (!isDragging.current) return;
//     const x = e.touches[0].pageX - scrollRef.current.offsetLeft;
//     const walk = (x - startX.current) * 2;
//     scrollRef.current.scrollLeft = scrollLeft.current - walk;
//   };

//   const handleImageClick = (index) => {
//     setSelectedImageIndex(index);
//     setShowModal(true);
//   };

//   const closeModal = () => {
//     setShowModal(false);
//     setSelectedImageIndex(null);
//   };

//   const handlePrev = () => {
//     setSelectedImageIndex((prev) => (prev === 0 ? selectedCategory.images.length - 1 : prev - 1));
//   };

//   const handleNext = () => {
//     setSelectedImageIndex((prev) => (prev === selectedCategory.images.length - 1 ? 0 : prev + 1));
//   };

//   const currentImage = selectedCategory.images[selectedImageIndex];
//   const imagesLoop = [...selectedCategory.images, ...selectedCategory.images];

//   return (
//     <section className="gallery-container">
//       <h2 className="gallery-title">{selectedCategory.name[language]}</h2>

//       <div
//         className="gallery-carousel-wrapper"
//         ref={scrollRef}
//         onMouseDown={onMouseDown}
//         onMouseLeave={onMouseLeave}
//         onMouseUp={onMouseUp}
//         onMouseMove={onMouseMove}
//         onTouchStart={onTouchStart}
//         onTouchEnd={onTouchEnd}
//         onTouchMove={onTouchMove}
//       >
//         <div className="gallery-cards">
//           {imagesLoop.map((item, index) => (
//             <div
//               key={`${item.id}-${index}`}
//               className="gallery-card"
//               onClick={() => handleImageClick(index % selectedCategory.images.length)}
//             >
//               <img
//                 src={item.imgSrc}
//                 alt={item.imgTitle[language] || `Image ${item.id}`}
//                 onError={(e) => {
//                   e.target.src = '/images/fallback.jpg';
//                   e.target.alt = language === 'mr' ? 'प्रतिमा उपलब्ध नाही' : 'Image not available';
//                 }}
//               />
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="gallery-description-box">
//         <p className="gallery-description">{selectedCategory.description[language]}</p>
//       </div>

//       {showModal && currentImage && (
//         <div className="modal-overlay" onClick={closeModal}>
//           <div className="modal-content" onClick={(e) => e.stopPropagation()}>
//             <button className="close-button" onClick={closeModal}>×</button>
//             <button className="nav-button prev-button" onClick={handlePrev}>←</button>
//             <img
//               src={currentImage.imgSrc}
//               alt={currentImage.imgTitle[language] || 'Preview'}
//               className="modal-image"
//             />
//             <button className="nav-button next-button" onClick={handleNext}>→</button>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// };

// export default Gallery;