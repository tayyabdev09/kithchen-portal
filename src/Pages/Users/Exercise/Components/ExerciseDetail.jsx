import React from "react";
import "./ExerciseDetail.scss";
import bannerImage from "../../../../Assets/images/defensive-details.png";
import efficiency from "../../../../Assets/images/goal.png";

const ExerciseDetail = () => {
  return (
    <>
      <div className="exercise-details athelete-padding">
        <img src={bannerImage} className="bannerImage" alt="bannerImage" />
        {/* Walk Through Section */}
        <div className="module-details">
          <h2 className="athelete-sub-heading">Walk Through</h2>
          <div className="row">
            {[1, 2, 3].map((i) => (
              <div key={i} className="col-lg-4">
                <div className="walk-through-card d-flex">
                  <div>
                    <h5>01</h5>
                    <p>20 Min / 3 Set</p>
                  </div>
                  <div>
                    <img src={efficiency} alt="efficieny" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Workout Sets Section */}
        <div className="module-details">
          <h2 className="athelete-sub-heading">Workout Sets</h2>
          <div className="row">
            {[1, 2, 3].map((i) => (
              <div key={i} className="col-lg-4">
                <div className="walk-through-card d-flex">
                  <div>
                    <h5>01</h5>
                    <p>15 Rep / 4 Set</p>
                  </div>
                  <div>
                    <img src={efficiency} alt="efficieny" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default ExerciseDetail;
