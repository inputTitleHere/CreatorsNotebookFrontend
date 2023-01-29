import DashboardProject from "./DashboardProject";

export default function DashboardTeam(props) {
  const c = props.children;
  console.log(props.children);
  return (
    <>
      <div className="team-topbar">
        <h2 className="team-title">{c.teamName} <span className={c.teamAuth}>{c.teamAuth}</span> </h2>
        <div className="small-button">
          <button>신규 프로젝트 생성</button> {/** TODO : 프로젝트 생성하기 */}
        </div>
      </div>
      <div className="project-wrapper">
        {c.projects.map((item,index) => {
          return <DashboardProject key={index}>{item}</DashboardProject>
        })}
      </div>
    </>
  );
}
