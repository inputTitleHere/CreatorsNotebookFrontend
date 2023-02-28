import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RecoilEnv, RecoilRoot } from "recoil";
import { PATHS } from "./config/PATHS";

const root = ReactDOM.createRoot(document.getElementById("root"));

RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false;

const router = createBrowserRouter(PATHS);

root.render(
  <React.StrictMode>
    <RecoilRoot>
      <RouterProvider router={router} />
    </RecoilRoot>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
