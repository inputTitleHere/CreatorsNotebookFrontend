import { Form, redirect } from "react-router-dom";

export default function ProjectComponent(props) {
  return (<div className="create-project-from-wrapper">
    프로젝트!
    <Form className="create-project-fomr">

    </Form>
    </div>);
}

export function createProjectAction(){
  console.log("TODO @ createProjectAction @ ProjectComponent");
  return redirect("/dashboard");
}
