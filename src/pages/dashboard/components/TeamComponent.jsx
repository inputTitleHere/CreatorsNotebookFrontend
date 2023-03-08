import ProjectComponent from "./ProjectComponent";

export default function TeamComponent(props) {
  const c = props.children;
  // console.log(props.children);
  return (
    <>
      <div className="team-topbar">
        <div className="team-title-wrapper">
          <h2 className="team-title">{c.teamName}</h2>
          <span className={c.teamAuth.toLowerCase()}>{c.teamAuth}</span>
        </div>
        <div className="small-button">
          <button>신규 프로젝트 생성</button>
          {/** TODO : 프로젝트 생성하기 */}
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
