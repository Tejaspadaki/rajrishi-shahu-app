import React from 'react';
import { useNavigate } from 'react-router-dom';
import './css/events.css';

export const eventData = [
  {
    id: 1,
    imgSrc: '/image/AdarshAai/4.png',
    imgTitle: 'आदर्श आई पुरस्कार',
    imgData:
      'On March 14, 2021, Rajarshi Shahu Shikshan Sanstha, Inam Dhamani organized the grand Rajmata Jijau Adarsh Aai Award Ceremony...',
  },
  {
    id: 2,
    imgSrc: '/image/10.jpg',
    imgTitle: 'रक्तदान शिबीर',
    imgData:
      'A blood donation camp was organized at Vitthal Patil Polytechnic...',
  },
  {
    id: 3,
    imgSrc: '/image/10.jpg',
    imgTitle: 'जागतिक योग दिन',
    imgData:
      'On International Yoga Day, students participated in yoga sessions...',
  },
  {
    id: 4,
    imgSrc: '/image/10.jpg',
    imgTitle: 'शिक्षक दिन',
    imgData:
      'On September 5, Teachers’ Day was celebrated with training...',
  },
  {
    id: 5,
    imgSrc: '/image/10.jpg',
    imgTitle: 'व्यसनमुक्ती रॅली',
    imgData:
      'A De-addiction Rally was held in the school area...',
  },
  {
    id: 6,
    imgSrc: '/image/sports/2.png',
    imgTitle: 'क्रीडा महोत्सव',
    imgData:
      'The Sports Festival was held at Bhauso Krishna Patil School...',
  },
  {
    id: 7,
    imgSrc: '/image/10.jpg',
    imgTitle: 'चित्रकला स्पर्धा',
    imgData:
      'A drawing competition was conducted on the birthday...',
  },
  {
    id: 8,
    imgSrc: '/image/10.jpg',
    imgTitle: 'सायकल वाटप',
    imgData:
      'Cycles were distributed to deserving students...',
  },
  {
    id: 9,
    imgSrc: '/image/10.jpg',
    imgTitle: 'गणवेश व वह्या वाटप',
    imgData:
      'Shri Swaminarayan Trust Mumbai distributed uniforms...',
  },
  {
    id: 10,
    imgSrc: '/image/10.jpg',
    imgTitle: 'वृक्षारोपण कार्यक्रम',
    imgData:
      'A tree plantation drive was conducted to celebrate...',
  },
];

const Events = () => {
  const navigate = useNavigate();

  const handleImageClick = (item) => {
    navigate(`/gallery/${item.id}`, { state: item });
  };

  return (
    <div className="events-container">
      <div className="events-header">
        <h2>शालेय व सहशालेय उपक्रम</h2>
        <div className="divider-container">
  <img src="/images/5.png" alt="divider" className="divider-image" />
</div>

      </div>
      <div className="cards-grid">
        {eventData.map((item) => (
          <div
            key={item.id}
            className="card"
            onClick={() => handleImageClick(item)}
          >
            <img src={item.imgSrc} alt={item.imgTitle} />
            <div className="card-content">
              <p>{item.imgTitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
