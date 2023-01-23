import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Main from "./index/Main";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./user/login/Login";
import ErrorPage from "./index/ErrorPage";
import Index from "./index/Index";
import Dashboard, { dashboardLoader } from "./user/dashboard/Dashboard";

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Index /> },
      { path: "login", element: <Login /> },
    ],
  },
  {
    path: "dashboard",
    element:<Dashboard/>,
    loader:dashboardLoader,
  }
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
