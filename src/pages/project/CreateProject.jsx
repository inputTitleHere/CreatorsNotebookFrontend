import { Form } from "react-router-dom";

function CreateProject() {
  return (
    <div className="create-project-wrapper">
      <Form className="create-project-form">
        <label htmlFor="projectName">프로젝트 명</label>
        <input type="text" name="projectName" id="projectName" placeholder="신규 프로젝트 이름. 멋지게 지어봐요!"/>
      </Form>
    </div>
  );
}
