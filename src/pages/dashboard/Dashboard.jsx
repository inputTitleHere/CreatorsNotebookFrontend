import { useEffect } from "react";
import { Outlet, redirect, useLoaderData } from "react-router-dom";
import { useRecoilState } from "recoil";
import { fetchApi } from "../../global/utils/ApiService";
import { dashboardData } from "../../recoil/globalRecoil";

function Dashboard() {
  const loaderData = useLoaderData(); // loader data 가져오기
  const [dashboard, setDashboard] = useRecoilState(dashboardData);

  useEffect(() => {
    console.log("Setting dashboard Data");
    setDashboard(loaderData);
  }, [loaderData, setDashboard]);

  /**
   * 계정 등급 파싱
   */
  const privilegeParse = (privilege) => {
    if (privilege === "T0") return "일반";
    if (privilege === "T1") return "실버";
    return null;
  };

  return (
    <div className="mypage-wrapper">
      <div className="title-wrapper">
        <h1>대충 {dashboard.userName}의 대쉬보드</h1>
        <div className="privilege">
          {privilegeParse(loaderData.userPrivilegeEnum)} 등급 사용자
        </div>
      </div>
      <Outlet/>
    </div>
  );
}
export default Dashboard;

/**
 * 대시보드 정보 로딩해서 바로 제시할 것.
 */
export async function dashboardLoader() {
  const dashboard = await fetchApi("/dashboard", "GET"); // TODO 임시 테스트 API
  if (!dashboard) {
    localStorage.removeItem("ACCESS_TOKEN");
    return redirect("/login");
  }
  return dashboard ? dashboard : null;
}
