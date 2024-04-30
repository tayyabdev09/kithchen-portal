import React from "react";
import { useParams, useNavigate } from "react-router";
import { setStorage, getStorage, flushStorage } from "./storage";
import { apiPost } from "./userAuth";

export function validateToken() {
  const { REACT_APP_API_URL } = process.env;
  let userInfo = getStorage("userInfo");

  if (userInfo && userInfo.token) {
    let url = `${REACT_APP_API_URL}/user/validateToken`;
    const data = {
      token: userInfo.token,
    };
    const headers = {
      headers: {
        Authorization: `bearer ${userInfo.token}`,
      },
    };
    apiPost(url, data, headers)
      .then((response) => {
        setStorage("userInfo", response.data.data);
      })
      .catch((error) => {
        flushStorage();
        window.location.href = "/login";
      });
  } else {
    flushStorage();
    window.location.href = "/login";
  }
}
