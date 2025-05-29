import React from 'react';
import './FoundingHistory.css';

const FoundingHistory = () => {
  return (
    <div className="history-section">
      <h2 className="history-title">Founding History</h2>
      <div className="history-decorator">✦</div>

      <div className="timeline">
        <div className="year-card light">
          <h3>2019</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur. Metus posuere in senectus etiam vivamus amet. Ultrices tortor volutpat mauris cras eu tempus blandit. Leo donec mauris adipiscing proin velit augue consequat vel.
          </p>
        </div>

        <div className="year-card dark">
          <h3>2020</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur. Metus posuere in senectus etiam vivamus amet. Ultrices tortor volutpat mauris cras eu tempus blandit. Leo donec mauris adipiscing proin velit augue consequat vel.
          </p>
        </div>

        <div className="year-card light">
          <h3>2021</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur. Metus posuere in senectus etiam vivamus amet. Ultrices tortor volutpat mauris cras eu tempus blandit. Leo donec mauris adipiscing proin velit augue consequat vel.
          </p>
        </div>
      </div>

      <hr className="history-separator" />

      <div className="bottom-info">
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <div className="trophy">
          🏆
        </div>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
      </div>
    </div>
  );
};

export default FoundingHistory;
