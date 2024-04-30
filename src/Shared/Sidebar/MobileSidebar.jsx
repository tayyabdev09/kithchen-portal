import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ReactSVG } from "react-svg";
import "../../custom-styles.scss";
import dashboardActive from "../../Assets/svgs/sidebar/dashboard-active.svg";
import GoalActive from "../../Assets/svgs/sidebar/goal-active.svg";
import exerciseActive from "../../Assets/svgs/sidebar/exercise-active.svg";
import settings from "../../Assets/svgs/sidebar/setting-2.svg";
import logo from "../../Assets/svgs/logo.svg";
import Logout from "../../Assets/svgs/sidebar/login.svg";
import { apiPost } from "../../Utilities/userAuth";
import { getStorage, flushStorage } from "../../Utilities/storage";
import { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router";

const Sidebar = ({ close, setClose }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isLoading, setIsLoading] = useState();
  const location = useLocation();
  const navigate = useNavigate();

  let userInfo = getStorage("userInfo");
  const { REACT_APP_API_URL } = process.env;

  let LogoutFun = () => {
    setIsLoading(true);
    if (userInfo) {
      let url = `${REACT_APP_API_URL}/user/logout`;
      const data = {
        token: userInfo.token,
        user_id: userInfo && userInfo.user_info && userInfo.user_info.id,
      };
      apiPost(url, data)
        .then((response) => {
          setTimeout(() => {
            setIsLoading(false);
            localStorage.removeItem("userInfo");
            localStorage.removeItem("token");
            navigate("/login");
          }, 1000);
        })
        .catch((error) => {
          setTimeout(() => {
            setIsLoading(false);
            localStorage.removeItem("userInfo");
            localStorage.removeItem("token");
            flushStorage();
            navigate("/login");
          }, 3000);
        });
    } else {
      localStorage.removeItem("userInfo");
      localStorage.removeItem("token");
      flushStorage();
      navigate("/login");
    }
  };

  const sidebarStyles = {
    position: close ? "absolute" : "fixed",
    backgroundColor: close ? "#fff" : "initial",
    width: close ? "75%" : "100%",
    zIndex: 999,
    height: "100vh",
    // position: "fixed",
  };

  return (
    <>
      {close ? <div className={`backdrop ${close ? "d-block" : ""}`}></div> : ""}
      <div className={`dashboard-sidebar ${close ? "d-block" : ""}`} style={sidebarStyles}>
        <div className="close-sidebar" onClick={() => setClose(!close)}>
          X
        </div>

        <div className="sidebar-profile position-relative">
          <ReactSVG src={logo} />
        </div>
        <div className="sidebar-menu">
          <NavLink to={"/dashboard"} className={({ isActive }) => (isActive ? "active list-btn" : "list-btn")}>
            <span>
              <ReactSVG src={dashboardActive} size={17} />
            </span>
            Dashbaord
          </NavLink>

          <NavLink to={"/goals"} className={({ isActive }) => (isActive ? "active list-btn" : "list-btn")}>
            <span>
              <ReactSVG src={GoalActive} size={17} />
            </span>
            Goal Creation
          </NavLink>
          <NavLink to={"/exercise"} className={({ isActive }) => (isActive ? "active list-btn" : "list-btn")}>
            <span>
              <ReactSVG src={exerciseActive} size={17} />
            </span>
            Exercise
          </NavLink>
          <NavLink to={""} className={({ isActive }) => (isActive ? "active list-btn" : "list-btn")}>
            <span>
              {/* <img src={require("../../assets/img/dashboard/icons/courses.png")} /> */}
              <ReactSVG src={settings} size={117} />
            </span>
            Settings
          </NavLink>

          <button type="button" onClick={() => LogoutFun()} className="btn btn-custom mt-0">
            {isLoading ? (
              <Toaster />
            ) : (
              <>
                <ReactSVG src={Logout} />
                &nbsp; Logout
              </>
            )}
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
