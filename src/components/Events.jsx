import React from 'react';
import { useNavigate } from 'react-router-dom';
import './css/events.css';

const Events = ({ currentLang }) => {
  const text = {
    en: {
      title: 'Our Events',
      events: [
        {
          id: 1,
          name: 'Adarsh Aai Award',
          img: '/image/AdarshAai/4.png',
          desc:
            'On March 14, 2021, Rajarshi Shahu Shikshan Sanstha, Inam Dhamani organized the grand Rajmata Jijau Adarsh Aai Award Ceremony...',
        },
        {
          id: 2,
          name: 'Blood Donation Camp',
          img: '/image/10.jpg',
          desc: 'A blood donation camp was organized at Vitthal Patil Polytechnic...',
        },
        {
          id: 3,
          name: 'International Yoga Day',
          img: '/image/10.jpg',
          desc: 'On International Yoga Day, students participated in yoga sessions...',
        },
        {
          id: 4,
          name: 'Teachers Day',
          img: '/image/10.jpg',
          desc: 'On September 5, Teachers’ Day was celebrated with training...',
        },
        {
          id: 5,
          name: 'De-addiction Rally',
          img: '/image/10.jpg',
          desc: 'A De-addiction Rally was held in the school area...',
        },
        {
          id: 6,
          name: 'Sports Festival',
          img: '/image/sports/2.png',
          desc: 'The Sports Festival was held at Bhauso Krishna Patil School...',
        },
        {
          id: 7,
          name: 'Drawing Competition',
          img: '/image/10.jpg',
          desc: 'A drawing competition was conducted on the birthday...',
        },
        {
          id: 8,
          name: 'Cycle Distribution',
          img: '/image/10.jpg',
          desc: 'Cycles were distributed to deserving students...',
        },
        {
          id: 9,
          name: 'Uniform Distribution',
          img: '/image/10.jpg',
          desc: 'Shri Swaminarayan Trust Mumbai distributed uniforms...',
        },
        {
          id: 10,
          name: 'Tree Plantation Drive',
          img: '/image/10.jpg',
          desc: 'A tree plantation drive was conducted to celebrate...',
        },
      ],
    },
    mr: {
      title: 'संस्थेने राबवलेले उपक्रम',
      events: [
        {
          id: 1,
          name: 'आदर्श आई पुरस्कार',
          img: '/image/AdarshAai/4.png',
          desc:
            'On March 14, 2021, Rajarshi Shahu Shikshan Sanstha, Inam Dhamani organized the grand Rajmata Jijau Adarsh Aai Award Ceremony...',
        },
        {
          id: 2,
          name: 'रक्तदान शिबीर',
          img: '/image/10.jpg',
          desc: 'A blood donation camp was organized at Vitthal Patil Polytechnic...',
        },
        {
          id: 3,
          name: 'जागतिक योग दिन',
          img: '/image/10.jpg',
          desc: 'On International Yoga Day, students participated in yoga sessions...',
        },
        {
          id: 4,
          name: 'शिक्षक दिन',
          img: '/image/10.jpg',
          desc: 'On September 5, Teachers’ Day was celebrated with training...',
        },
        {
          id: 5,
          name: 'व्यसनमुक्ती रॅली',
          img: '/image/10.jpg',
          desc: 'A De-addiction Rally was held in the school area...',
        },
        {
          id: 6,
          name: 'क्रीडा महोत्सव',
          img: '/image/sports/2.png',
          desc: 'The Sports Festival was held at Bhauso Krishna Patil School...',
        },
        {
          id: 7,
          name: 'चित्रकला स्पर्धा',
          img: '/image/10.jpg',
          desc: 'A drawing competition was conducted on the birthday...',
        },
        {
          id: 8,
          name: 'सायकल वाटप',
          img: '/image/10.jpg',
          desc: 'Cycles were distributed to deserving students...',
        },
        {
          id: 9,
          name: 'गणवेश व वह्या वाटप',
          img: '/image/10.jpg',
          desc: 'Shri Swaminarayan Trust Mumbai distributed uniforms...',
        },
        {
          id: 10,
          name: 'वृक्षारोपण कार्यक्रम',
          img: '/image/10.jpg',
          desc: 'A tree plantation drive was conducted to celebrate...',
        },
      ],
    },
  };

  const t = text[currentLang] || text.en;
  const navigate = useNavigate();

  const handleClick = (item) => {
    // Navigates to gallery page with state
    navigate(`/gallery/${item.id}`, { state: item });
  };

  return (
    <div className="events-container">
      <div className="events-header">
        <h2>{t.title}</h2>
        <div className="divider-container">
          <img src="/images/5.png" alt="divider" className="divider-image" />
        </div>
      </div>

      <div className="cards-grid">
        {t.events.map((item) => (
          <div
            key={item.id}
            className="card"
            onClick={() => handleClick(item)}
          >
            {/* Use img tag to fit your CSS */}
            <img src={item.img} alt={item.name} />
            <div className="card-content">
              <p>{item.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>  );
};

export default Events;
