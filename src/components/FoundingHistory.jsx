import React, { useState } from 'react';
import CountUp from 'react-countup';
import './FoundingHistory.css';

// Convert English digits to Marathi
const toMarathiDigits = (num) => {
  const marathiDigits = ['०', '१', '२', '३', '४', '५', '६', '७', '८', '९'];
  return num.toString().split('').map(d => (/\d/.test(d) ? marathiDigits[d] : d)).join('');
};

const FoundingHistory = ({ currentLang }) => {
  const [activeStage, setActiveStage] = useState('stage1');

  const handleCardClick = (stageKey) => {
    setActiveStage(stageKey);
  };

  const text = {
    en: {
      title: 'Founding History – Year-wise in 4 Stages',
      stages: {
        stage1: {
          title: ' Stage 1: The Visionary Origin',
          events: [
            { date: '1980s', desc: 'Inspired by the vision of Rajarshi Chhatrapati Shahu Maharaj, the seeds of educational reform for rural areas were sown.' },
            { date: '1990 – 1991', desc: 'Under the leadership of Mr. Vitthal Patil (Kakaji), an educational institute was founded with the aim to provide modern and value-based education to rural students.' },
          ],
        },
        stage2: {
          title: ' Stage 2: The First Milestone – Inception',
          events: [
            { date: '1995', desc: 'Establishment of Freedom Fighter Late Bhausaheb Krishna Patil Secondary School, Inam Dhamani. The school started delivering quality education based on knowledge, discipline, and values.' },
          ],
        },
        stage3: {
          title: 'Stage 3: Expansion – Network of Schools',
          events: [
            { date: '2004', desc: 'Year of expansion — following schools were established:' },
            { date: '', desc: '• Paramhans Yashwantbaba Maharaj Secondary School, Bamanoli\n• P.P. Gagangiri Maharaj Secondary School, Sawli\n• Smt. Chandrabai Bhauso Patil Secondary School, Vaddi\n• Sant Gajanan Maharaj Secondary School, Vijaynagar\nWhich led to quality education being accessible in multiple villages.' },
          ],
        },
        stage4: {
          title: 'Stage 4: Diversification – Vocational & Higher Education',
          events: [
            { date: '2009 – 2010', desc: 'Vitthal Patil Polytechnic, Inam Dhamani — launched diploma courses for rural students.' },
            { date: '2010 – 2011', desc: 'Sambhaji Industrial Training Center (ITI), Inam Dhamani — started modern vocational skill development.' },
          ],
        },
      },
      infoBlocks: [
        { img: '/images/School Building.png', alt: 'Icon 1', number: 6, suffix: '', label: 'Educational Institutions' },
        { img: '/images/Student Male.png', alt: 'Icon 2', number: 2000, suffix: '', label: 'Students' },
        { img: '/images/Teacher.png', alt: 'Icon 3', number: 35, suffix: '+', label: 'Qualified Staff Members' },
        { img: '/images/Trophy.png', alt: 'Icon 4', number: 10, suffix: '', label: 'Awards at Various Levels' },
      ],
    },

    mr: {
      title: 'स्थापनेचा इतिहास – चार टप्प्यांमध्ये',
      stages: {
        stage1: {
          title: ' टप्पा १: दूरदृष्टीचा आरंभ',
          events: [
            { date: '१९८० चे दशक', desc: 'प्रेरणा घेतली राजर्षी छत्रपती शाहू महाराज यांच्या समाजसुधारणेच्या विचारांमधून — ग्रामीण भागात गुणवत्तापूर्ण शिक्षण देण्याच्या उद्देशाने शैक्षणिक कार्याची मुहूर्तमेढ रोवली.' },
            { date: '१९९० – १९९१', desc: 'मा. विठ्ठल पाटील (काकाजी) यांच्या नेतृत्वाखाली शैक्षणिक संस्थेची स्थापना झाली. उद्दिष्ट – ग्रामीण विद्यार्थ्यांसाठी आधुनिक आणि संस्कारक्षम शिक्षण.' },
          ],
        },
        stage2: {
          title: 'टप्पा २: पहिला टप्पा – सुरुवात',
          events: [
            { date: '१९९५', desc: 'स्वातंत्र्यसैनिक कै. भाऊसाहेब कृष्णा पाटील माध्यमिक विद्यालय, इनाम धामणी ची स्थापना. शाळेने "ज्ञान, शिस्त व संस्कार" या त्रिसूत्रीवर आधारित गुणवत्तापूर्ण शिक्षण सुरू केले.' },
          ],
        },
        stage3: {
          title: ' टप्पा ३: विस्तार – शाळांचे जाळे',
          events: [
            { date: '२००४', desc: 'संस्थेच्या विस्ताराचा वर्ष — खालील शाळा स्थापन:' },
            { date: '', desc: '• परमहंस यशवंतबाबा महाराज माध्यमिक विद्यालय, बामणोली\n• प. पू. गगनगिरी महाराज माध्यमिक विद्यालय, सावळी\n• श्रीमती चंद्राबाई भाऊसो पाटील माध्यमिक विद्यालय, वड्डी\n• संत गजानन महाराज माध्यमिक विद्यालय, विजयनगर\nयामुळे ग्रामीण भागात दर्जेदार शिक्षण सहज उपलब्ध झाले.' },
          ],
        },
        stage4: {
          title: 'टप्पा ४: विविधीकरण – व्यावसायिक व उच्च शिक्षण',
          events: [
            { date: '२००९ – २०१०', desc: 'विठ्ठल पाटील पॉलिटेक्निकची स्थापना — डिप्लोमा अभ्यासक्रम ग्रामीण विद्यार्थ्यांसाठी.' },
            { date: '२०१० – २०११', desc: 'संभाजी औद्योगिक प्रशिक्षण केंद्र (ITI) — कौशल्यविकासासाठी आधुनिक प्रशिक्षण.' },
          ],
        },
      },
      infoBlocks: [
        { img: '/images/School Building.png', alt: 'आयकॉन १', number: 6, suffix: '', label: 'शैक्षणिक संस्था' },
        { img: '/images/Student Male.png', alt: 'आयकॉन २', number: 2000, suffix: '', label: 'विद्यार्थी' },
        { img: '/images/Teacher.png', alt: 'आयकॉन ३', number: 35, suffix: '+', label: 'सुशिक्षित कर्मचारी' },
        { img: '/images/Trophy.png', alt: 'आयकॉन ४', number: 10, suffix: '', label: 'पुरस्कार (पातळ्यांवर)' },
      ],
    },
  };

  const t = text[currentLang] || text.en;

  return (
    <div className="history-section">
      <h2 className="history-title">{t.title}</h2>

      <div className="history-decorator">
        <img src="/images/6.png" alt="decorator" />
      </div>

      <div className="timeline">
        {Object.entries(t.stages).map(([stageKey, stageData]) => (
          <div
            key={stageKey}
            className={`year-card ${activeStage === stageKey ? 'active' : 'inactive'}`}
            onClick={() => handleCardClick(stageKey)}
          >
            <h3>{stageData.title}</h3>
          </div>
        ))}
      </div>

      <div className="stage-details">
        {t.stages[activeStage].events.map((event, idx) => (
          <div key={idx} className="event-block">
            {event.date && <h4 className="event-date">{event.date}</h4>}
            <p className="event-desc">{event.desc}</p>
          </div>
        ))}
      </div>

      <hr className="history-separator" />

      <div className="bottom-info">
        {t.infoBlocks.map(({ img, alt, number, suffix, label }, index) => (
          <div className="info-block" key={index}>
            <img src={img} alt={alt} />
            <div className="info-number">
              <CountUp
                end={number}
                duration={2}
                suffix={suffix}
                formattingFn={(val) =>
                  currentLang === 'mr' ? toMarathiDigits(Math.floor(val)) + suffix : val + suffix
                }
              />
            </div>
            <p className="info-label">{label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoundingHistory;
