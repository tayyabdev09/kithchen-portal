import React, { useState, useEffect } from "react";
import "./Goals.scss";
import { ReactSVG } from "react-svg";
import threePointers from "../../../Assets/svgs/three_pointers.svg";
import player from "../../../Assets/svgs/player.svg";
import ball from "../../../Assets/svgs/ball.svg";

const Goals = () => {
  const isMobileDevice = () => {
    return window.innerWidth <= 768; // Consider this a threshold for mobile devices
  };

  const [selectedTime, setSelectedTime] = useState("20 Minutes");
  const [isMobile, setIsMobile] = useState(isMobileDevice());
  const [activeIndex, setActiveIndex] = useState(null);

  const handleTimeSelection = (time) => {
    setSelectedTime(time);
  };
  const timeOptions = ["20 Minutes", "30 Minutes", "45 Minutes", "60 Minutes", "90 Minutes"];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(isMobileDevice());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="goals-main ">
      <div className="goals-head ath-grey athelete-padding">
        <h4 className="d-flex">
          <ReactSVG src={threePointers} />
          &nbsp;Three-Pointer
        </h4>
      </div>
      {/* Time Selection */}
      <div className="time-selection-container athelete-padding">
        <h2 className="athelete-sub-heading">Select Time Selection</h2>
        <div className={`time-selection-buttons ${isMobile ? "tg-scroll-x" : ""}`}>
          {timeOptions.map((time) => (
            <button key={time} className={`time-selection-button ${selectedTime === time ? "active" : ""}`} onClick={() => handleTimeSelection(time)}>
              {time}
            </button>
          ))}
        </div>
      </div>

      {/* Goal Selection */}
      <div className="goal-selection athelete-padding">
        <h2 className="athelete-sub-heading">Select Goal Selection</h2>
        <div className="d-flex tg-scroll-x">
          {[1, 2, 3, 4].map((i, index) => (
            <div key={i} className="col-lg-4">
              <div className={`goal-selection-card ${activeIndex === index ? "active" : ""}`} onClick={() => setActiveIndex(index)}>
                <div className="player">
                  <ReactSVG src={player} />
                </div>
                <div className="player-stats">
                  <ReactSVG src={ball} />
                  <p>
                    Shooting
                    <span>100%</span>
                  </p>
                  <div className="d-flex flex-column">
                    <span>30 Minutes</span>
                    <span>10 Exercise</span>
                  </div>
                  <button className="btn-custom">Let’s Start</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Goals;
