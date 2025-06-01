import React from "react";
import "./Homepage.css";

const HeroSection = () => {
  return (
    <div className="homepage">
      <div className="top-section">
        <div className="profile-section">
          <div className="profile-block">
            <img
              src="/images/shahu-maharaj.png"
              alt="छत्रपती राजर्षी शाहू महाराज"
            />
            <div className="profile-caption">
              प्रेरणास्थान :<br />छत्रपती राजर्षी शाहू महाराज
            </div>
          </div>

          <div className="profile-block">
            <img
              src="/images/4.png"
              alt="वै. सौ. मालुषी विठ्ठलराव पाटील (दीदी)"
            />
            <div className="profile-caption">
              भावपूर्ण श्रद्धांजली<br />वै. सौ. मालुषी विठ्ठलराव पाटील (दीदी)
            </div>
          </div>
        </div>
        <div className="hero-quote">|| यशवंत हो, जयवंत हो ||</div>
      </div>

      <div className="middle-section">
        <div className="content-left">
          <h1 className="hero-title">राजर्षी शाहू शिक्षण संस्था,</h1>
          <h2 className="hero-subtitle">इनाम धामणी, सांगली</h2>
<br /> <br />
          <p className="hero-description">
          राजर्षी शाहू शिक्षण संस्था, इनाम धामणी, सांगली ही संस्था छत्रपती
          राजर्षी शाहू महाराज यांच्या प्रेरणेतून स्थापन करण्यात आली असून, ही संस्था
          ग्रामीण भागातील विद्यार्थी, शेतकरी, कामकऱ्यांचे आणि आर्थिकदृष्ट्या
          दुर्बल विद्यार्थ्यांसाठी गुणवत्तापूर्ण शिक्षण देण्याचे कार्य करीत आहे.
          संस्थेच्या माध्यमातून विविध शैक्षणिक क्षेत्रात उल्लेखनीय प्रगती करण्यात
          आली आहे. संस्थेचे अध्यक्ष मा. विठ्ठलराव भाऊसाहेब पाटील (काकाजी) यांच्या
          मार्गदर्शनाखाली आणि सचिव श्री. गगनराज पाटील यांच्या नेतृत्वाखाली संस्था
          यशस्वी वाटचाल करीत आहे.
        </p>
        </div>

        <div className="profile-block-kakaji">
          <img
            src="/images/3.png"
            alt="श्री. विठ्ठलराव भाऊसाहेब पाटील (काकाजी)"
          />
          <div className="profile-caption">
            श्री. विठ्ठलराव भाऊसाहेब पाटील (काकाजी)<br />अध्यक्ष
          </div>
        </div>
          <div className="profile-block-bhaiyaa">
            <img
              src="/images/bhaiyaa 1.png"
              alt="श्री. गगनराज विठ्ठलराव पाटील (मॅड्या)"
            />
            <div className="profile-caption">
              श्री. गगनराज विठ्ठलराव पाटील (मॅड्या)<br />सचिव.
          </div>
        </div>
      </div>
      </div>
  );
};

export default HeroSection;
