import { useEffect, useState } from "react";
import { Outlet, redirect, useLoaderData } from "react-router-dom";
import { useRecoilState } from "recoil";
import { fetchApi } from "../../global/utils/ApiService";
import { dashboardData } from "../../recoil/globalRecoil";
import DashboardHeader from "./components/DashboardHeader";
import "./dashboard.scss";

function Dashboard() {
  // const loaderData = useLoaderData(); // loader data 가져오기]
  // eslint-disable-next-line no-unused-vars
  const [dashboard, setDashboard] = useRecoilState(dashboardData);
  
  if(!dashboard.lastLoad || new Date() - dashboard.lastLoad > 1000*60*10){ // 10분 넘으면 데이터 재로딩.
    
    const dataPromise = fetchApi("/dashboard", "GET");
    dataPromise.then((data)=>{
      if (!data) {
        localStorage.removeItem("ACCESS_TOKEN");
        return redirect("/user/login");
      }
      data.lastLoad=new Date();
      setDashboard(data);
    });
  }

  // useEffect(() => {
  //   console.log("Setting dashboard Data");
  //   setDashboard(loaderData);
  // }, [loaderData, setDashboard]);

  return (
    <div className="mypage-wrapper">
      <DashboardHeader/>
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
  // const dashboard = await fetchApi("/dashboard", "GET"); 
  // TODO 임시 테스트 API
  // if (!dashboard) {
  //   localStorage.removeItem("ACCESS_TOKEN");
  //   return redirect("/login");
  // }
  // return dashboard ? dashboard : null;
  return null;
}
