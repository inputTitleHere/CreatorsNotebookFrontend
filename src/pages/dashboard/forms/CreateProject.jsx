import { useState } from "react";
import { Form, redirect, useLocation } from "react-router-dom";
import { fetchApi } from "../../../global/utils/ApiService";

export default function CreateProject() {
  const location = useLocation(); // state도 같이 전달됨
  const teamUuid = location.state;

  const [projectName, setProjectName] = useState(false);
  const [projectNameLen, setProjectNameLen] = useState(0);

  // 프로젝트명 글자수 제한 50글자로
  const checkProjectName = (e) => {
    const len = e.target.value.length;
    setProjectNameLen(len);

    if (len === 0) {
      setProjectName(false);
    } else {
      setProjectName(true);
    }
    if (len > 49) {
      e.target.value = e.target.value.substring(0, 49);
    }
  };
  // 프로젝트 설명 글자수 제한 4000글자로?

  return (
    <div className="create-project-wrapper">
      <Form method="post" className="create-project-form">
        <div className="input-wrapper">
          <label htmlFor="projectName">
            <h2 className="title-font">프로젝트 명</h2>
            <span>
              <span className="char">{projectNameLen}</span>/50
            </span>
          </label>
          <input
            type="text"
            name="projectName"
            id="projectName"
            placeholder="신규 프로젝트 이름. 멋지게 지어봐요!"
            onChange={checkProjectName}
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="projectDescription">
            <h2 className="title-font">프로젝트 설명</h2>
          </label>
          <textarea
            name="projectDescription"
            id="projectDescription"
            placeholder="여기에는 프로젝트의 설명을 입력해주세요!"
          ></textarea>
        </div>
        <input type="hidden" name="teamUuid" value={teamUuid} />
        <button disabled={!projectName}>프로젝트 생성</button>
      </Form>
    </div>
  );
}

// 생성되면 project 페이지로 redirect -> uuid같이 전달하기
export async function createProjectAction(props) {
  const formData = Object.fromEntries(await props.request.formData());
  const project = await fetchApi("/project/new", "POST", formData);
  // TODO -> project 페이지 만들기
  console.log(project);
  return redirect("/project/" + project.projectUuid);
}
