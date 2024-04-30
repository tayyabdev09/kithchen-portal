import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./Sidebar.css";
import { ReactSVG } from "react-svg";
import { useNavigate } from "react-router";
import logo from "../../Assets/svgs/logo.svg";
import Dashboard from "../../Assets/svgs/sidebar/dashboard.svg";
import DashboardActive from "../../Assets/svgs/sidebar/dashboard-active.svg";
import GoalActive from "../../Assets/svgs/sidebar/goal.svg";
import Goal from "../../Assets/svgs/sidebar/goal-active.svg";
import Exercise from "../../Assets/svgs/sidebar/exercise.svg";
import ExerciseActive from "../../Assets/svgs/sidebar/exercise-active.svg";
import Settings from "../../Assets/svgs/sidebar/setting-2.svg";
import Logout from "../../Assets/svgs/logout.svg";
import { apiPost } from "../../Utilities/userAuth";
import { getStorage, flushStorage } from "../../Utilities/storage";
import { Toaster } from "react-hot-toast";
import Logo from "../Logo/Logo";

const Sidebar = () => {
  const [isLoading, setIsLoading] = useState();
  const location = useLocation();
  const navigate = useNavigate();

  // let LogoutFun = () => {
  //   setIsLoading(true);
  //   if (userInfo) {
  //     let url = `${REACT_APP_API_URL}/user/logout`;
  //     const data = {
  //       token: userInfo.token,
  //       user_id: userInfo && userInfo.user_info && userInfo.user_info.id,
  //     };
  //     apiPost(url, data)
  //       .then((response) => {
  //         setTimeout(() => {
  //           setIsLoading(false);
  //           localStorage.removeItem("userInfo");
  //           localStorage.removeItem("token");
  //           navigate("/login");
  //         }, 1000);
  //       })
  //       .catch((error) => {
  //         setTimeout(() => {
  //           setIsLoading(false);
  //           localStorage.removeItem("userInfo");
  //           localStorage.removeItem("token");
  //           flushStorage();
  //           navigate("/login");
  //         }, 3000);
  //       });
  //   } else {
  //     localStorage.removeItem("userInfo");
  //     localStorage.removeItem("token");
  //     flushStorage();
  //     navigate("/login");
  //   }
  // };

  return (
    <div className="dashboard-sidebar">
      <div className="sidebar">
        <div className="d-flex flex-column flex-shrink-0 p-3 text-white ">
          <NavLink to="/dashboard" className="text-center mb-5 mt-3">
            <div className="sidebar-logo">
              <Logo />
            </div>
          </NavLink>
          <ul className="nav nav-pills flex-column mb-auto">
            <li className="nav-item">
              <NavLink to="/dashboard" className={location.pathname === "/dashboard" ? "nav-link active" : "nav-link"}>
                <div className="align-self-center">{location.pathname === "/dashboard" ? <ReactSVG src={DashboardActive} /> : <ReactSVG src={Dashboard} />}</div>
                <div className="align-self-center">&nbsp; Dashboard</div>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/dashboard" className={location.pathname === "/all-users" ? "nav-link active" : "nav-link text-dark d-flex"}>
                <div className="align-self-center">{location.pathname === "/all-users" ? <ReactSVG src={GoalActive} /> : <ReactSVG src={Goal} />}</div>
                <div className="align-self-center">&nbsp; Recipe</div>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/dashboard" className={location.pathname === "/all-users" ? "nav-link active" : "nav-link text-dark d-flex"}>
                <div className="align-self-center">{location.pathname === "/all-users" ? <ReactSVG src={GoalActive} /> : <ReactSVG src={Goal} />}</div>
                <div className="align-self-center">&nbsp; Credits</div>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/dashboard" className={location.pathname === "/all-users" ? "nav-link active" : "nav-link text-dark d-flex"}>
                <div className="align-self-center">{location.pathname === "/all-users" ? <ReactSVG src={GoalActive} /> : <ReactSVG src={Goal} />}</div>
                <div className="align-self-center">&nbsp; Payments</div>
              </NavLink>
            </li>
          </ul>
          <hr />
          <div className="dropdown-logout">
            {/* <button className="nav-link text-dark d-flex">
              <div className="align-self-center">
                <ReactSVG src={Logout} />
              </div>
              <div className="align-self-center">&nbsp; Logout</div>
            </button> */}
            <button type="button" className="btn btn-custom mt-0 logout-btn">
              {isLoading ? (
                <Toaster />
              ) : (
                <>
                  <ReactSVG src={Logout} />
                  <div className="align-self-center">&nbsp; Logout</div>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
