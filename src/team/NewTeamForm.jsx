import { Form, redirect } from "react-router-dom";
import { fetchApi } from "../utils/ApiService";

export function NewTeamForm(){

  // action으로 대체할것
  // const submitForm=(e)=>{
  //   e.preventDefault();
  // }

  return (
    <div className="new-team-form-wrapper">
      <Form method="post" action="">
        <label htmlFor="teamName">팀 이름</label>
        <input type="text" name="teamName" id="teamName" />
        <label htmlFor="teamDescription">팀 설명</label>
        <input type="text" name="teamDescription" id="teamDescription" />
        <button>팀 만들기</button>
      </Form>
    </div>
  )
}

export async function newTeamAction({request, params}){
  console.log("Im new team action! ↓");
  const data = Object.fromEntries(await request.formData());
  console.log(data);

  fetchApi("/team/create","POST",data);

  return redirect("/dashboard");
}
