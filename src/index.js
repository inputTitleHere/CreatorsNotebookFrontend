import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import reportWebVitals from "./reportWebVitals";
import Main, { mainLoader } from "./index/Main";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./user/login/Login";
import ErrorPage from "./index/ErrorPage";
import Index from "./index/Index";
import Dashboard, { dashboardLoader } from "./user/dashboard/Dashboard";
import Logout, { logoutLoader } from "./user/login/Logout";
import { RecoilEnv, RecoilRoot } from "recoil";
import DashboardIndex from "./user/dashboard/DashboardIndex";
import { NewTeamForm } from "./team/NewTeamForm";

const root = ReactDOM.createRoot(document.getElementById("root"));

RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false;

const router = createBrowserRouter([
  {
    // 인덱스 페이지 역할
    path: "/",
    element: <Main />,
    loader: mainLoader,
    errorElement: <ErrorPage />,
    children: [{ index: true, element: <Index /> }],
  },
  // no Header or so.
  { path: "/login", element: <Login /> },
  { path: "/logout", element: <Logout />, loader: logoutLoader },
  // 메인 대시보드와 기능 페이지
  {
    path: "/dashboard",
    element: <Dashboard />,
    loader : dashboardLoader,
    children: [
      {index:true, element : <DashboardIndex/>},
      {path:"team/new", element:<NewTeamForm/>},
    ],
  },
]);

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
