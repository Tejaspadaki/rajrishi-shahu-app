import React from 'react'
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import './css/events.css';



export const eventData = [
    {
        id: 1,
        imgSrc: '/image/10.jpg',
        imgTitle: 'आदर्श आई पुरस्कार',
        imgData: 'On March 14, 2021, Rajarshi Shahu Shikshan Sanstha, Inam Dhamani organized the grand Rajmata Jijau Adarsh Aai Award Ceremony to honor exemplary mothers for their societal and familial contributions. Dignitaries present included Hon. Ramdas Athawale, Hon. Nana Patole, Vikram Sawant, Deepakbaba Shinde, and other prominent leaders. The goal of this award is to celebrate and recognize the silent strength of women and promote women empowerment through acknowledgment and appreciation.'
    },
    {
        id: 2,
        imgSrc: '/image/10.jpg',
        imgTitle: 'रक्तदान शिबीर',
        imgData: 'A blood donation camp was organized at Vitthal Patil Polytechnic, Inam Dhamani, with enthusiastic participation from students. The event raised health awareness and emphasized the importance of community service among youth.'
    },
    {
        id: 3,
        imgSrc: '/image/10.jpg',
        imgTitle: 'जागतिक योग दिन',
        imgData: 'On International Yoga Day, students participated in yoga sessions promoting fitness and wellness. The aim was to create awareness about physical and mental well-being among students.'
    },
    {
        id: 4,
        imgSrc: '/image/10.jpg',
        imgTitle: 'शिक्षक दिन',
        imgData: 'On September 5, Teachers’ Day was celebrated with training and felicitation programs at Vitthal Patil Polytechnic. The event highlighted the important role teachers play in shaping students futures.'
    },
    {
        id: 5,
        imgSrc: '/image/10.jpg',
        imgTitle: 'व्यसनमुक्ती रॅली',
        imgData: 'A De-addiction Rally was held in the school area of Inam Dhamani to spread awareness about the harmful effects of addiction. Students and villagers participated actively.'
    },
    {
        id: 6,
        imgSrc: '/image/10.jpg',
        imgTitle: 'क्रीडा महोत्सव',
        imgData: 'The Sports Festival was held at Bhauso Krishna Patil School, Inam Dhamani. Events like cricket, chess, and rangoli competition encouraged student participation and sportsmanship.'
    },
    {
        id: 7,
        imgSrc: '/image/10.jpg',
        imgTitle: 'चित्रकला स्पर्धा',
        imgData: 'A drawing competition was conducted on the occasion of the birthday of President Shri Vitthal Patil (Kakaji), encouraging creativity among students.'
    },
    {
        id: 8,
        imgSrc: '/image/10.jpg',
        imgTitle: 'सायकल वाटप',
        imgData: 'Cycles were distributed to deserving students by Sevasadan Hospital Trust at Inam Dhamani, aiming to support rural students in their daily commute to school.'
    },
    {
        id: 9,
        imgSrc: '/image/10.jpg',
        imgTitle: 'गणवेश व वह्या वाटप',
        imgData: 'On December 5, 2021, Shri Swaminarayan Trust Mumbai distributed uniforms and notebooks to students, supporting their basic educational needs.'
    },
    {
        id: 10,
        imgSrc: '/image/10.jpg',
        imgTitle: 'वृक्षारोपण कार्यक्रम',
        imgData: 'A tree plantation drive was conducted to celebrate the 75th birthday of Shri Sharad Pawar, promoting environmental awareness among students and villagers.'
    },
];
const Events = () => {
  const navigate = useNavigate();

  const handleImageClick = (item) => {
    navigate(`/gallery/${item.id}`, { state: item });
  };

  return (
    <div className='marathi-text'>
      <div className="flex items-center flex-col">
        <p className="marathi-text md:text-4xl text-3xl pb-2 text-[#502D18] font-bold">शालेय व सहशालेय उपक्रम</p>
        <img src="/images/5.png" alt="" className="" />
      </div>
      <div className="">
        <div className="md:grid md:grid-cols-3">
          {eventData.map((item) => (
            <div
              key={item.id}
              className=" -5 m-10 cursor-pointer rounded-2xl text-[#502D18]"
              onClick={() => handleImageClick(item)}
            >
              <img src={item.imgSrc} alt={item.imgTitle} className="w-full rounded-2xl" />
              <div className="flex flex-col ">
                <p className="md:text-3xl text-2xl p-5 text-center ">{item.imgTitle}</p>
                
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events

