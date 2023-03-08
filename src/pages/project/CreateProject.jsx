import { Form } from "react-router-dom";

export default function CreateProject() {

  // 프로젝트명 글자수 제한 50글자로

  // 프로젝트 설명 글자수 제한 4000글자로?

  return (
    <div className="create-project-wrapper">
      <Form className="create-project-form">
        <label htmlFor="projectName">프로젝트 명</label>
        <input type="text" name="projectName" id="projectName" placeholder="신규 프로젝트 이름. 멋지게 지어봐요!"/>
        <label htmlFor="projectDescription">프로젝트 설명</label>
        <input type="text" name="projectDescription" id="projectDescription" placeholder="여기에는 프로젝트의 설명을 입력해주세요!"/>
      </Form>
    </div>
  );
}
