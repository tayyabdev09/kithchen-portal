import React, { useState, useEffect } from "react";
import "./MobileHeader.scss";
import { FaBell, FaBars } from "react-icons/fa";

const MobileHeader = ({ close, setClose }) => {
  const { REACT_APP_API_URL } = process.env;
  const [active, setActive] = useState();

  return (
    <div id="desktop-header">
      <div className="header">
        <div className="d-flex">
          <div
            className="side-menu"
            onClick={() => {
              setClose(!close);
            }}
          >
            <FaBars size={22} />
          </div>
          <h6 className="align-self-center ms-2">
            <small>John Cena</small>
          </h6>
        </div>
        <div className="position-relative">
          <button className={`notifi-btn ${active ? "active" : ""}`} onClick={() => setActive(!active)}>
            <span className="bell-icon">
              <FaBell />
              <div className="unread-label"></div>
            </span>
          </button>
          {active && (
            <>
              <div id="arrow"></div>

              <div className={`notifications-dropdown`}>
                <div className="notification-detail">
                  <h6>Notification</h6>
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
                    <div key={i} className="notifi-bar">
                      <div className="notifi-text">
                        <strong>Dickens Street,</strong> Elwood VIC 3184 Yesodei Hatorah College Kindergarten
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default MobileHeader;
