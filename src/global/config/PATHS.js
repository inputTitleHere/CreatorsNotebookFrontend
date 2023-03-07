// import ErrorPage from "../pages/mainpage/error/ErrorPage";
// import Index from "../index/Index";
// import Login from "../index/login/Login";
// import Logout, { logoutLoader } from "../../"
// import Main, {mainLoader} from "../pages/mainpage/Main";
// import Register, { registerAction } from "../index/register/Register";
// import { newTeamAction, NewTeamForm } from "../team/NewTeamForm";
// import Dashboard, { dashboardLoader } from "../user/dashboard/Dashboard";
// import DashboardIndex from "../user/dashboard/DashboardIndex";

import ErrorPage from "../../pages/mainpage/error/ErrorPage";
import Index from "../../pages/mainpage/index/Index";
import Main, { mainLoader } from "../../pages/mainpage/Main";
import Login from "../../pages/mainpage/login/Login"
import Logout, { logoutLoader } from "../../pages/mainpage/login/Logout";
import Register, { registerAction } from "../../pages/mainpage/register/Register";
import Dashboard, { dashboardLoader } from "../../pages/dashboard/Dashboard";
import DashboardIndex from "../../pages/dashboard/DashboardIndex";
import { newTeamAction, NewTeamForm } from "../../pages/team/NewTeamForm";

export const PATHS = [
  {
    // 인덱스 페이지 역할
    path: "/",
    element: <Main />,
    loader: mainLoader,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Index /> },
    ],

  },
  // no Header or so.
  { path: "/login", element: <Login /> },
  { path: "/logout", element: <Logout/>, loader: logoutLoader },
  { path: "/register", element: <Register />,action:registerAction, errorElement:<ErrorPage/>},
  // 메인 대시보드와 기능 페이지
  {
    path: "/dashboard",
    element: <Dashboard />,
    loader: dashboardLoader,
    children: [
      { index: true, element: <DashboardIndex /> },
      { path: "team/new", element: <NewTeamForm/>, action: newTeamAction },
    ],
  },
];
