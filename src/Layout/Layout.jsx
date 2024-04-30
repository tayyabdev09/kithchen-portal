import React from "react";
import Sidebar from "../Shared/Sidebar/Sidebar";
import MobileSidebar from "../Shared/Sidebar/MobileSidebar";
import Header from "../Shared/Header/Header";
import MobileHeader from "../Shared/Header/MobileHeader";
import { useEffect, useState, useLayoutEffect } from "react";
import { Outlet, useLocation, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Auth } from "../Context/authContext";
import { validateToken } from "../Utilities/validateToken";

const Layout = () => {
  const { isAuthenticated } = Auth();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const location = useLocation();
  const [close, setClose] = useState();
  const [onlineStatus, setOnlineStatus] = useState(navigator.onLine);
  const [loading, setLoading] = useState(true);
  const { pathname } = useLocation();
  const [scrollPositions, setScrollPositions] = useState({});
  const [innerPage, setInnerPage] = useState(false);

  const countString = (str, letter) => {
    const re = new RegExp(letter, "g");

    const count = str.match(re).length;

    return count;
  };

  let letterToCheck = "/";

  const result = countString(pathname, letterToCheck);

  useLayoutEffect(() => {
    setLoading(true);
    if (location.pathname !== "/sign-up" && location.pathname !== "/sign-up/" && location.pathname !== "/login" && location.pathname !== "/login/") {
    }
    const timer = setTimeout(() => {
      setLoading(false);
      if (scrollPositions[pathname] !== undefined) {
        window.scrollTo(0, scrollPositions[pathname]);
      } else {
        window.scrollTo(0, 0);
      }
    }, 300);
    return () => clearTimeout(timer);
  }, [pathname]);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleWindowResize);
    if (pathname.includes("company")) {
      setInnerPage(false);
    } else {
      if (result > 1) {
        setInnerPage(true);
      } else {
        setInnerPage(false);
      }
    }
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });

  return (
    <div className="dashboard-main" style={{ marginLeft: windowWidth > 992 ? "322px" : "" }} id="layout">
      <div className="">
        {windowWidth > 992 ? <Sidebar /> : <MobileSidebar close={close} setClose={setClose} />}

        <div>{windowWidth > 992 ? <Header /> : <MobileHeader close={close} setClose={setClose} />}</div>

        {isAuthenticated ? <Outlet /> : <Navigate to="/login" />}
      </div>
    </div>
  );
};
export default Layout;
