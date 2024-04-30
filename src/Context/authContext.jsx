import { createContext, useState, useEffect, useContext } from "react";
import { apiPost, apiGet } from "../Utilities/userAuth";
import { flushStorage, getStorage } from "../Utilities/storage";
import { handleError } from "../Utilities/customHelper";
import { useNavigate } from "react-router-dom";
const AuthContext = createContext({});

// Auth Provider
const AuthProvider = (props) => {
  var navigate = useNavigate();
  const [token, setToken] = useState("");
  let value = localStorage.getItem("userInfo") ? localStorage.getItem("userInfo") : false;
  const [isAuthenticated, setIsAuthenticated] = useState(value);

  /* Verify if token is present or not */
  useEffect(() => {
    if (token) {
      verifyToken(token);
    } else {
      if (localStorage.getItem("token")) {
        setToken(localStorage.getItem("token"));
        verifyToken(localStorage.getItem("token"));
      } else {
        setIsAuthenticated(false);
      }
    }
  }, []);

  /* Used to set authentication */
  const activateAuthentication = (value) => {
    setIsAuthenticated(value);
    return;
  };
  const { REACT_APP_API_URL } = process.env;
  /* Function to verify if token is valid or not */

  const verifyToken = (token) => {
    let userInfo = getStorage("userInfo");
    let token22 = token ? token.split('"') : "";

    let url = `${REACT_APP_API_URL}/user/validateToken`;
    const params = {
      token: token22[1],
    };
    apiPost(url, params)
      .then((response) => {
        // console.log(response.data.code)
        if (parseInt(response.data.code) === 200) {
          // Token is valid
          setIsAuthenticated(true);
        } else {
          // Token is not valid or has expired
          setIsAuthenticated(false);
          localStorage.removeItem("userInfo");
          localStorage.removeItem("token");
          flushStorage();
          navigate("/login");
        }
      })
      .catch((error) => {
        setIsAuthenticated(false);
        localStorage.removeItem("userInfo");
        localStorage.removeItem("token");
        flushStorage();
        navigate("/login");
      });
  };

  /* Used to set token */
  const activateToken = (value) => {
    setToken(value);
    return;
  };

  const authContextValue = {
    activateToken,
    activateAuthentication,
    isAuthenticated,
  };

  return <AuthContext.Provider value={authContextValue} {...props} />;
};

// Notification Provide

const Auth = () => useContext(AuthContext);

export { AuthProvider, Auth };
