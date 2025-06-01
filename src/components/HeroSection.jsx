import React from 'react';
import './Homepage.css';

export default function HeroSection({ currentLang }) {
  const text = {
    en: {
      quote: '|| Be Successful, Be Victorious ||',
      title: (
        <>
          Rajarshi Shahu <br /> Shikshan Sanstha,
        </>
      ),
      subtitle: 'Inam Dhamani, Sangli',
      description: `Rajarshi Shahu Shikshan Sanstha, Inam Dhamani, Sangli was established in the inspiration of Chhatrapati Rajarshi Shahu Maharaj. The institution works towards providing quality education to rural students, farmers, workers, and economically backward students. Under the guidance of President Mr. Vitthalrao Bhausaheb Patil (Kakaji) and the leadership of Secretary Mr. Gaganraj Patil, the institution is progressing successfully.`,
      inspiration: 'Inspiration: Chhatrapati Rajarshi Shahu Maharaj',
      tribute: 'Heartfelt Tribute: Late. Smt. Malushi Vitthalrao Patil (Didi)',
      president: 'Mr. Vitthalrao Bhausaheb Patil (Kakaji)\nPresident',
      secretary: 'Mr. Gaganraj Vitthalrao Patil (Maddy)\nSecretary'
    },
    mr: {
      quote: '|| यशवंत हो, जयवंत हो ||',
      title: 'राजर्षी शाहू शिक्षण संस्था,',
      subtitle: 'इनाम धामणी, सांगली',
      description: `राजर्षी शाहू शिक्षण संस्था, इनाम धामणी, सांगली ही संस्था छत्रपती राजर्षी शाहू महाराज यांच्या प्रेरणेतून स्थापन करण्यात आली असून, ही संस्था ग्रामीण भागातील विद्यार्थी, शेतकरी, कामकऱ्यांचे आणि आर्थिकदृष्ट्या दुर्बल विद्यार्थ्यांसाठी गुणवत्तापूर्ण शिक्षण देण्याचे कार्य करीत आहे. संस्थेच्या माध्यमातून विविध शैक्षणिक क्षेत्रात उल्लेखनीय प्रगती करण्यात आली आहे. संस्थेचे अध्यक्ष मा. विठ्ठलराव भाऊसाहेब पाटील (काकाजी) यांच्या मार्गदर्शनाखाली आणि सचिव श्री. गगनराज पाटील यांच्या नेतृत्वाखाली संस्था यशस्वी वाटचाल करीत आहे.`,
      inspiration: 'प्रेरणास्थान :\nछत्रपती राजर्षी शाहू महाराज',
      tribute: 'भावपूर्ण श्रद्धांजली\nवै. सौ. मालुषी विठ्ठलराव पाटील (दीदी)',
      president: 'श्री. विठ्ठलराव भाऊसाहेब पाटील (काकाजी)\nअध्यक्ष',
      secretary: 'श्री. गगनराज विठ्ठलराव पाटील (मॅड्या)\nसचिव.'
    }
  };

  const t = text[currentLang] || text.mr;

  return (
    <div className="homepage">
      <div className="top-section">
        <div className="profile-section">
          <div className="profile-block">
            <img src="/images/shahu-maharaj.png" alt={t.inspiration} />
            <div className="profile-caption">{t.inspiration}</div>
          </div>

          <div className="profile-block">
            <img src="/images/4.png" alt={t.tribute} />
            <div className="profile-caption">{t.tribute}</div>
          </div>
        </div>
        <div className="hero-quote">{t.quote}</div>
      </div>

      <div className="middle-section">
        <div className="content-left">
          <h1 className="hero-title">{t.title}</h1>
          <h2 className="hero-subtitle">{t.subtitle}</h2>
          <br />
          <br />
          <p className="hero-description">{t.description}</p>
        </div>

        <div className="profile-block-kakaji">
          <img src="/images/3.png" alt={t.president} />
          <div className="profile-caption">{t.president}</div>
        </div>

        <div className="profile-block-bhaiyaa">
          <img src="/images/bhaiyaa 1.png" alt={t.secretary} />
          <div className="profile-caption">{t.secretary}</div>
        </div>
      </div>
    </div>
  );
}
