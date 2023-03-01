import { Form, redirect } from "react-router-dom";
import Header from "../../common/Header";
import { fetchApi } from "../../utils/ApiService";

import "./Register.scss";

function Register() {
  return (
    <div>
      <Header showButton={false} />
      <section className="register-page">
        <Form method="post">
          <div className="input">
            <label htmlFor="userEmail">이메일</label>
            <input
              type="text"
              id="userEmail"
              name="userEmail"
              placeholder="아이디로 사용할 이메일을 입력하세요"
            />
          </div>
          <div className="input">
            <label htmlFor="password">비밀번호</label>
            <input type="password" id="password" name="userPassword" />
          </div>
          <div className="input">
            <label htmlFor="name">닉네임</label>
            <input type="text" id="name" name="userName" />
          </div>
          <div className="warnings"></div>
          <button>회원가입</button>
        </Form>
      </section>
    </div>
  );
}

export async function registerAction(props) {
  const formData = Object.fromEntries(await props.request.formData());
  console.log(props);
  console.log(formData);
  await fetchApi("/user/register", "POST", formData).then((result)=>{
    if(result.token){
      localStorage.setItem("ACCESS_TOKEN",result.token);
      localStorage.setItem("USER_NAME",result.userName);
    }
  });
  return redirect("/");
}

export default Register;
