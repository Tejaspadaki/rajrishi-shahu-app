import React from 'react';
import './Donate.css';

function Donate({ currentLang }) {
  const text = {
    en: {
      heading: 'Donate Now',
      name: 'Your Name',
      email: 'Your E-Mail',
      phone: 'Your Mobile Number',
      donation: 'What you want to donate ?',
      submit: 'Submit',
      quote: 'Lorem ipsum dolor sit amet consectetur. Sollicitudin nisl ut faucibus tortor sapien adipiscing nulla. Nibh turpis id nibh faucibus. Amet orci vel risus mi cursus. Rhoncus aliquet sit vulputate lorem platea ornare blandit.',
    },
    mr: {
      heading: 'आता दान करा',
      name: 'तुमचं नाव',
      email: 'तुमचा ई-मेल',
      phone: 'तुमचा मोबाइल क्रमांक',
      donation: 'तुम्ही काय दान करू इच्छिता?',
      submit: 'सबमिट',
      quote: 'कृपया समाजाच्या सेवेसाठी मदत करा. तुमचे योगदान आमच्यासाठी मौल्यवान आहे.',
    },
  };

  const langText = text[currentLang];

  return (
    <div className="donate-container">
      <div className="donate-left">
        <h1>{langText.heading}</h1>
        <form className="donate-form">
          <input type="text" placeholder={langText.name} />
          <input type="email" placeholder={langText.email} />
          <input type="tel" placeholder={langText.phone} />
          <input type="text" placeholder={langText.donation} />
          <button type="submit">{langText.submit}</button>
        </form>
      </div>
      <div className="donate-right">
        <div className="quote-icon">❝</div>
        <p>{langText.quote}</p>
        <div className="decorative-line">~ ❁ ~</div>
      </div>
    </div>
  );
}

export default Donate;
