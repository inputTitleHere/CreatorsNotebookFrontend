import { useEffect } from "react";
import { Outlet, redirect, useLoaderData } from "react-router-dom";
import { useRecoilState } from "recoil";
import { fetchApi } from "../../global/utils/ApiService";
import { dashboardData } from "../../recoil/globalRecoil";
import DashboardHeader from "./components/DashboardHeader";
import "./dashboard.scss";

function Dashboard() {
  const loaderData = useLoaderData(); // loader data 가져오기]
  // eslint-disable-next-line no-unused-vars
  const [dashboard, setDashboard] = useRecoilState(dashboardData);

  useEffect(() => {
    if (loaderData) {
      setDashboard(loaderData);
    }
  }, [loaderData, setDashboard]);

  // if (!dashboard.lastLoad || new Date() - dashboard.lastLoad > 1000 * 60 * 10) {
  //   // 10분 넘으면 데이터 재로딩.
  //   const dataPromise = fetchApi("/dashboard", "GET");

  //   dataPromise.then((data) => {
  //     console.log(data);
  //     if (!data) {
  //       localStorage.removeItem("ACCESS_TOKEN");
  //       localStorage.removeItem("USER_NAME");
  //     } else {
  //       data.lastLoad = new Date();
  //       setDashboard(data);
  //     }
  //   });
  // }

  return (
    <div className="mypage-wrapper">
      <DashboardHeader />
      <Outlet />
    </div>
  );
}
export default Dashboard;

/**
 * 대시보드 정보 로딩해서 바로 제시할 것.
 */
export async function dashboardLoader() {
  console.log("Dashboard Loader in action!");
  const dashboard = await fetchApi("/dashboard", "GET");
  if (!dashboard) {
    localStorage.removeItem("ACCESS_TOKEN");
    localStorage.removeItem("USER_NAME");
    return redirect("/user/login");
  }
  return dashboard ? dashboard : null;
}
