import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import "./App.css";
import Dashboard from "./Pages/Users/Dashboard/Dashboard.jsx";
import Login from "./Pages/Users/Auth/Login.jsx"; // Corrected import paths
import SignUp from "./Pages/Users/Auth/SignUp.jsx";
import ForgotPassword from "./Pages/Users/Auth/ForgotPassword.jsx";
import PasswordSuccess from "./Pages/Users/Auth/PasswordSuccess.jsx";
import Sidebar from "./Shared/Sidebar/Sidebar.jsx";
import Header from "./Shared/Header/Header.jsx";
const Home = lazy(() => import("./"));
const Layout = lazy(() => import("./Layout/Layout.jsx"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <PageContainer />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;

function PageContainer() {
  const location = useLocation();

  // List of paths where the sidebar and header should not be shown
  const excludeSidebarAndHeader = ["/", "/login", "/signUp", "/forgot-password", "/password-success"];

  // Check if the current pathname is in the list of excluded paths
  const showSidebarAndHeader = !excludeSidebarAndHeader.includes(location.pathname);

  return (
    <div className="d-flex">
      {showSidebarAndHeader && <Sidebar />}
      <div style={{ width: "100%" }}>
        {showSidebarAndHeader && <Header />}
        <Routes>
          <Route path="/" element={<Home />} index />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/password-success" element={<PasswordSuccess />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </div>
  );
}
