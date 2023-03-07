import ErrorPage from "../pages/mainpage/error/ErrorPage";
import Index from "../index/Index";
import Login from "../index/login/Login";
import Logout, { logoutLoader } from "../index/login/Logout";
import Main, {mainLoader} from "../pages/mainpage/Main";
import Register, { registerAction } from "../index/register/Register";
import { newTeamAction, NewTeamForm } from "../team/NewTeamForm";
import Dashboard, { dashboardLoader } from "../pages/dashboard/Dashboard";
import DashboardIndex from "../pages/dashboard/DashboardIndex";

export const PATHS = [
  {
    // 인덱스 페이지 역할
    path: "/",
    element: <Main />,
    loader: mainLoader,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Index /> },
      {path:"test/login", element : <Login/>}
    ],

  },
  // no Header or so.
  { path: "/login", element: <Login /> },
  { path: "/logout", element: <Logout />, loader: logoutLoader },
  { path: "/register", element: <Register />,action:registerAction, errorElement:<ErrorPage/>},
  // 메인 대시보드와 기능 페이지
  {
    path: "/dashboard",
    element: <Dashboard />,
    loader: dashboardLoader,
    children: [
      { index: true, element: <DashboardIndex /> },
      { path: "team/new", element: <NewTeamForm />, action: newTeamAction },
    ],
  },
];
