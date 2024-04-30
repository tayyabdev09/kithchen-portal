import React from "react";
import "./Header.css";
import { FiSearch } from "react-icons/fi";
import { FiBell } from "react-icons/fi";
import { NavLink, useLocation } from "react-router-dom";
import { getStorage } from "../../Utilities/storage";

const Header = () => {
  const location = useLocation();
  const userInfo = getStorage("userInfo");
  const { REACT_APP_API_URL } = process.env;

  return (
    <div className="header">
      <div className="row">
        <h4 className="col-sm-6 align-self-center mb-0">Greetings</h4>
        {/* <p>We have aimed to show you everything that is relevant to you in one handy place</p> */}
        <div className="col-sm-6">
          <div className="d-flex justify-content-end">
            {location.pathname === "/goals" ? (
              ""
            ) : (
              <div className="searchbar position-relative">
                <input className="form-control search-input" placeholder="Search" />
                <div className="ms-3">
                  <FiSearch className="position-absolute top-50 translate-middle-y me-3" style={{ left: "10px" }} />
                </div>
              </div>
            )}
            <button className="notifi-bell">
              <FiBell />
            </button>
            <div className="profile-btn">
              <div className="profile-img">
                {" "}
                <img src={require("../../Assets/images/user.png")} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
