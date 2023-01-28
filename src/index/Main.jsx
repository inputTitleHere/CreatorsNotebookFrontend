import { useEffect } from "react";
import { Outlet, redirect } from "react-router-dom";
import { fetchApi } from "../utils/ApiService";
import { Buffer } from "buffer";
import "./Main.scss";

function Main() {
  useEffect(() => {
    checkLoggedIn();
  }, []);

  const checkLoggedIn = () => {};

  const doStuff = () => {
    fetchApi("user/test/timed", "GET");
  };

  return (
    <div>
      <h1>Creators Notebook</h1>
      <div className="login-section-wrapper">
        <button onClick={doStuff}>call authorized api</button>
        <div className="login-test">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export function mainLoader() {
  const access_token = localStorage.getItem("ACCESS_TOKEN");
  if (access_token) {
    const decoded = JSON.parse(
      Buffer.from(access_token.split(".")[1], "base64").toString("utf-8")
    );
    if (decoded.iss === "Creators Notebook") {
      return redirect("/dashboard");
    }
  }
  return null;
}
export default Main;
