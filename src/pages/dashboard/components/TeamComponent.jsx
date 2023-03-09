import { Link } from "react-router-dom";
import ProjectComponent from "./ProjectComponent";

export default function TeamComponent(props) {
  const c = props.children;
  // console.log(props.children);
  return (
    <>
      <div className="team-topbar">
        <div className="team-title-wrapper">
          <h2 className="team-title">
            {c.teamName}
            <span className={c.teamAuth.toLowerCase()}>{c.teamAuth}</span>
          </h2>
          <div className="team-buttons">
            <Link to={"/dashboard/project/new"} state={c.teamUuid}>신규 프로젝트 생성</Link>
          </div>
        </div>
      </div>
      <div className="project-wrapper">
        {c.projects.map((item, index) => {
          return <ProjectComponent key={index}>{item}</ProjectComponent>;
        })}
      </div>
    </>
  );
}
