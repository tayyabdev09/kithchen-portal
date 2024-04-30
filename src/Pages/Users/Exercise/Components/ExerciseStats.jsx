import React, { useEffect, useState } from "react";
import "../Exercise.scss";
import { ReactSVG } from "react-svg";
import { Link } from "react-router-dom";
import threePointers from "../../../../Assets/svgs/three_pointers.svg";

const ExerciseStats = () => {
  return (
    <>
      <div className="exercise-main">
        {/* <div className="three-pointers ath-grey athelete-padding">
          <h4 className="d-flex">
            <ReactSVG src={threePointers} />
            &nbsp;Three-Pointer
          </h4>
          <div className="row">
            <div className="col-lg-5 col-md-5">
              <div className="time-selection">
                <p>
                  Time Selection:<span> 20 Minutes</span>
                </p>
                <p>
                  Goals Selection:<span> Fundamentals</span>
                </p>
                <p>
                  Equipment:<span> Leg Extension machine</span>
                </p>
              </div>
            </div>
          </div>
        </div> */}
        <div className="athelete-padding">
          <h1 className="mb-3">All Exercise</h1>
          <div className="exercise-stats">
            <div className="row">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="col-lg-6 mb-4">
                  <Link to={"/exercise-details"}>
                    <div className="exercise-name">
                      <p className="mb-3">
                        <span className="exercise_name">Exercise Name:</span>
                        &nbsp;Defensive Footwork Training
                      </p>
                      <p className="mb-3">
                        <span className="exercise_name">Registered Candidates:</span> &nbsp;5
                      </p>
                      <p className="mb-3">
                        <span className="exercise_name">Exercise Duration: </span> &nbsp; 30 Minutes
                      </p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ExerciseStats;
