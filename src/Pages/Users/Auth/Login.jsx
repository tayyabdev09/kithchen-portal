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

function Login() {
  const { REACT_APP_API_URL } = process.env;
  const [alert, setAlert] = useState();
  const [wrong, setWrong] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState();
  const navigate = useNavigate();

  // const notify = () => toast("Here is your toast.");

  // const togglePasswordVisibility = () => {
  //   setShowPassword(!showPassword);
  // };
  // useEffect(() => {
  //   let userInfo = getStorage("userInfo");
  //   if (userInfo && userInfo.token) {
  //     window.location.href = "/dashboard";
  //   }
  // }, [navigate]);

  // const hideAlert = () => {
  //   setTimeout(() => {
  //     setAlert(null);
  //   }, 3000); // 3000 milliseconds (3 seconds)
  // };

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

  // const Login = (data) => {
  //   setIsLoading(true);
  //   let url = `${REACT_APP_API_URL}/auth/login`;
  //   const params = {
  //     email: data.email,
  //     password: data.password,
  //   };
  //   apiPost(url, params)
  //     .then((response) => {
  //       console.log(response.data.success);
  //       if (response.data.success == true) {
  //         alert("success true");
  //         setStorage("userInfo", response.data.data);
  //         setStorage("token", response.data.data.token);
  //         toast.success(response.data.message);
  //         setIsLoading(false);
  //         window.location.href = "/dashboard";
  //         hideAlert();
  //       } else {
  //         if (parseInt(response.data.status) === 200 && response.data.success === false) {
  //           toast.error(response.data.message);
  //           setAlert(response.data.message);
  //           hideAlert();
  //         }
  //         if (parseInt(response.data.status) === 401) {
  //           toast.error("Your password or email incorrect");
  //         }
  //         flushStorage();
  //         setIsLoading(false);

  //         if (parseInt(response.status) === 404) {
  //           toast.error(response.data.message);
  //         } else if (parseInt(response.status) === 422) {
  //           let msg = "User already logged in.";
  //           toast.error(msg);
  //         }
  //       }
  //     })
  //     .catch((error) => {
  //       flushStorage();
  //       setIsLoading(false);
  //       let msg = "Something is wrong, please try after some time.";
  //       toast.error(msg);
  //     });
  // };

  return (
    <div className="auth-login">
      <div className="vh-100 d-flex justify-content-center align-items-center">
        <div className="login-main">
          <div className="d-flex justify-content-center "></div>
          <h2 className="card-title text-center mb-3">
            <Logo />
          </h2>
          <p className="card-text text-center mb-4">Login to your Account</p>
          <form>
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

              <input className="form-control kitchen-input" name="password" type={showPassword ? "text" : "password"} placeholder="Enter your password" {...register("password", { required: "This field is required!" })} />
              <p className="text-danger fs-6 text-start">{errors.password?.message}</p>
              <span className="password-toggle-icon "></span>
            </div>
            <div className="d-flex justify-content-between">
              <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="rememberMeCheck" />
                <label className="form-check-label text-muted" htmlFor="rememberMeCheck">
                  Remember me
                </label>
              </div>
              <div className="text-center  mb-3">
                <Link to="/forgot-password" className="text-primary">
                  Forgot Password?
                </Link>
              </div>
            </div>
            <div className="d-grid mb-2">
              <div className="login-btn">
                <Link to="/dashboard">
                  <button type="submit" className="btn btn-primary btn-lg btn-custom">
                    {isLoading ? "loading......" : "Login"}
                  </button>
                </Link>
              </div>
            </div>
            <div className="d-grid create-account">
              <p>
                Don't have an account?{" "}
                <Link to={"/signup"}>
                  <span className="text-primary"> Create an account</span>
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
