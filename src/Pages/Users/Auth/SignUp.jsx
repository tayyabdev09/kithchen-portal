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

function SignUp() {
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
          <p className="card-text text-center mb-4">Create your Account</p>
          <form>
            <div className="mb-3 position-relative">
              <label>
                Full Name <span>*</span>
              </label>
              <input type="fullname" className="form-control kitchen-input" name="fullname" {...register("text", { required: "This field is required" })} placeholder="Enter your Full Name" />
              <p className="text-danger fs-6 text-start">{errors.fullname?.message}</p>
            </div>
            <div className="mb-3 position-relative">
              <label>
                Email <span>*</span>
              </label>
              <input type="email" className="form-control kitchen-input" name="email" {...register("email", { required: "This field is required" })} placeholder="Enter your email address" />
              <p className="text-danger fs-6 text-start">{errors.email?.message}</p>
            </div>
            <div className="mb-3 position-relative">
              <label>
                Password <span>*</span>
              </label>

              <input className="form-control kitchen-input" name="password" placeholder="Enter your password" {...register("password", { required: "This field is required!" })} />
              <p className="text-danger fs-6 text-start">{errors.password?.message}</p>
              <span className="password-toggle-icon "></span>
            </div>
            <div className="mb-3 position-relative">
              <label>
                Password <span>*</span>
              </label>

              <input className="form-control kitchen-input" name="password" placeholder="Enter your Confirm Password" {...register("password", { required: "This field is required!" })} />
              <p className="text-danger fs-6 text-start">{errors.password?.message}</p>
              <span className="password-toggle-icon "></span>
            </div>

            <div className="d-grid mb-2">
              {/* <Link to="/dashboard" className="btn btn-primary btn-lg btn-custom">
                Login
              </Link> */}
              <div className="login-btn">
                <Link to={"/login"}>
                  <button type="button" className="btn btn-primary btn-lg btn-custom">
                    {isLoading ? "loading......" : "Sign up"}
                  </button>
                </Link>
              </div>
            </div>
            <div className="d-grid create-account">
              <p>
                Already have an Account ?{" "}
                <Link to={"/login"}>
                  <span className="text-primary"> Login</span>
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
