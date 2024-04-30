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

function ForgotPassword() {
  const { REACT_APP_API_URL } = process.env;
  const [alert, setAlert] = useState();
  const [wrong, setWrong] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState();
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
          <p className="card-text text-center mb-4">Please enter your Email Address</p>
          <form>
            <div className="mb-3 position-relative">
              <label>Email Address</label>
              <input type="email" className="form-control kitchen-input" name="email" {...register("email", { required: "This field is required" })} placeholder="Enter your email address" />
              <p className="text-danger fs-6 text-start">{errors.email?.message}</p>
            </div>

            <div className="d-grid mb-2">
              <div className="login-btn">
                <button type="submit" className="btn btn-primary btn-lg btn-custom">
                  {isLoading ? "loading......" : "Confirm"}
                </button>
              </div>
            </div>
            <div className="d-grid create-account">
              <p>
                Remember your password?{" "}
                <Link to={"/login"}>
                  <span className="text-primary"> Go Back</span>
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
