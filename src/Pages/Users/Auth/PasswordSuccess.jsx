import React, { useState, useEffect } from "react";
import "./Auth.scss";
import "../../../custom-styles.scss";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { FaRegEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { apiPost } from "../../../../src/Utilities/userAuth";
import toast, { Toaster } from "react-hot-toast";
import { setStorage, getStorage, flushStorage } from "../../../../src/Utilities/storage";
import Logo from "../../../Shared/Logo/Logo";

function PasswordSuccess() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm({
    defaultValues: {
      // email: "",
      // password: "",
    },
  });

  return (
    <div className="auth-login">
      <div className="vh-100 d-flex justify-content-center align-items-center">
        <div className="login-main">
          <div className="d-flex justify-content-center "></div>
          <h2 className="card-title text-center mb-3">
            <Logo />
          </h2>
          <div className="text-center my-4">
            <img src={require("../../../Assets/images/tick1.png")} alt="tick" />
          </div>
          <p className="back-login">Go Back to Login</p>
          <p className="updated">Your Password has been updated Successfully</p>
          <div className="d-grid mb-2">
            <div className="login-btn">
              <Link to={"/login"}>
                <button type="submit" className="btn btn-primary btn-lg btn-custom">
                  {isLoading ? "loading......" : "Back to Login"}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PasswordSuccess;
