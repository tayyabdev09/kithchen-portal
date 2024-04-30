import React, { useEffect, useState } from "react";
import "./Exercise.scss";
import { ReactSVG } from "react-svg";
import threePointers from "../../../Assets/svgs/three_pointers.svg";
import postWorkout from "../../../Assets/images/post-workout.png";
import footWork from "../../../Assets/images/defensive-footowrk.png";
import { Link } from "react-router-dom";
const Exercise = () => {
  const isMobileDevice = () => {
    return window.innerWidth <= 768;
  };
  const [isMobile, setIsMobile] = useState(isMobileDevice());
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(isMobileDevice());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      <div className="exercise-main">
        <div className="three-pointers ath-grey athelete-padding">
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
            <div className="col-lg-7 col-md-7">
              <div className="goals-for-workout">
                <h2 className="athelete-sub-heading">Goals For Your Workout</h2>
                <div className={`d-flex ${isMobile ? "tg-scroll-x" : ""}`}>
                  {[1, 2, 3].map((i) => (
                    <div key={i} className={`${isMobile ? "gaols-card d-flex justify-content-between mb-3" : "gaols-card d-flex justify-content-between"}`}>
                      <div>
                        <img src={postWorkout} alt="post-workout" />
                      </div>
                      <div className="card-details">
                        <p className="shooting">Shooting</p>
                        <p className="percent">100%</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="exerciseTimeWorkout athelete-padding">
          <h2 className="athelete-sub-heading">Goals of Exercises Time of Workout</h2>
          <div className="exercise-modules">
            <div className="row">
              {[1, 2, 3].map((i) => (
                <div key={i} className="col-lg-4 col-md-6 col-sm-4 mb-4">
                  <div className="module">
                    <div>
                      <img src={footWork} alt="foot-work" />
                      <div className="moduleDetails">
                        <h5>Defensive Footwork Training</h5>
                        <p>15 Rep / 4 Set</p>
                        <Link to={"/exercise-details"}>
                          <button className="btn-custom">Let’s Start Workout</button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Exercise;
