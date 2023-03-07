import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { dashboardData } from "../../recoil/globalRecoil";
import DashboardTeam from "./components/DashboardTeam";

export default function DashboardIndex(props) {
  const [dashboard] = useRecoilState(dashboardData);
  const [privateTeam, setPrivateTeam] = useState([]);
  const [publicTeam, setPublicTeam] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    /**
     * 팀 정보에서 개인용 팀(계정당 1개)인지 공유된 팀인지 확인.
     */
    if (dashboard) {
      const privT = [];
      const publT = [];
      dashboard.teamDtos.forEach((item, index) => {
        if (!item.teamPrivate) {
          publT.push(<DashboardTeam key={index}>{item}</DashboardTeam>);
        } else {
          privT.push(<DashboardTeam key={index}>{item}</DashboardTeam>);
        }
      });
      setPrivateTeam(privT);
      setPublicTeam(publT);
    }
  }, [dashboard]);

  /**
   * 신규 팀 생성
   */
  const createNewTeam = () => {
    console.log("CREATE NEW TEAM");
    navigate("/dashboard/team/new");
  };

  return (
    <>
      <button onClick={createNewTeam}>신규 팀 생성</button>
      <div className="team-list-wrapper">
        <div className="private-team-wrapper">{privateTeam}</div>
        <div className="public-team-wrapper">{publicTeam}</div>
      </div>
    </>
  );
}
