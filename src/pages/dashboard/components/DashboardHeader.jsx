import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { dashboardData } from "../../../recoil/globalRecoil";

export default function DashboardHeader() {
  const [dashboard] = useRecoilState(dashboardData);
  /**
   * 계정 등급 파싱
   */
  const privilegeParse = (privilege) => {
    if (privilege === "T0") return "일반";
    if (privilege === "T1") return "실버";
    return null;
  };
  return (
    <div className="title-wrapper">
      <h1>
        <span className="username">{dashboard.userName}</span>의 노트북
      </h1>
      <div className="privilege">등급 : {privilegeParse(dashboard.userPrivilegeEnum)}</div>
      <div className="util">
        <Link to={"/user/logout"}>로그아웃</Link>
        |
        <Link to={"/user/settings"}>환경설정아이콘</Link>
      </div>
    </div>
  );
}
