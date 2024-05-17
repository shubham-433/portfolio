import React from "react";

const EducationRoadMap = () => {
  return (
    <div className="history-roadmap-wrap">
      <div className="roadmap-line-shape">
        <span className="dot-one pulse-one"></span>
        <span className="dot-two pulse-two"></span>
      </div>

      <ul className="list-wrap">
        <li
          className="wow fadeInDown"
          data-wow-delay=".2s"
          data-wow-duration="1.5s"
        >
          <span className="dot pulse-three"></span>
          <div className="content">
            <h5 className="title">2018</h5>
            <p className="title">SSC Maharashtra Board (89%)</p>
          </div>
        </li>
        <li
          className="wow fadeInUp"
          data-wow-delay=".2s"
          data-wow-duration="1.5s"
        >
          <span className="dot pulse-four"></span>
          <div className="content">
            <h5 className="title">2020</h5>
            <p className="title">HSC Maharashtra Board (80%)</p>
          </div>
        </li>
        <li
          className="wow fadeInDown"
          data-wow-delay=".2s"
          data-wow-duration="1.5s"
        >
          <span className="dot pulse-five"></span>
          <div className="content">
            <h5 className="title"></h5>
            <p></p>
          </div>
        </li>
        <li
          className="wow fadeInUp"
          data-wow-delay=".2s"
          data-wow-duration="1.5s"
        >
          <span className="dot pulse-six"></span>
          <div className="content">
            <h5 className="title">2024</h5>
            <p className="title">BE Computer Engingeering</p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default EducationRoadMap;
