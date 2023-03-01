import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import Header from "../../common/Header";
import { BASE_URL } from "../../config/app-config";
import { userNameState } from "../../recoil/globalRecoil";
import { fetchApi } from "../../utils/ApiService";

function Login() {
  const setUserName = useSetRecoilState(userNameState);

  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const navigate = useNavigate();

  const handleEmail = (e) => {
    // console.log("handle email = "+e.target.value);
    setEmail(e.target.value);
    console.log("set email = " + email);
  };
  const handlePwd = (e) => {
    // console.log("handle pwd = "+e.target.value);
    setPwd(e.target.value);
    console.log("set pwd = " + pwd);
  };

  const login = (e) => {
    e.preventDefault();
    console.log(`email = ${email} pwd = ${pwd}`);
    const payload = {
      userEmail: email,
      userPassword: pwd,
      keepLoggedIn: false, // 임시 false
    };

    fetchApi("/user/login", "POST", payload).then((result) => {
      console.log("result -> ");
      console.log(result);
      if (result.token) {
        localStorage.setItem("ACCESS_TOKEN", result.token);
        localStorage.setItem("USER_NAME",result.userName);
        setUserName(result.userName);
        // 여기에 react 정보저장 처리 진행하고 redirect하도록 함.
        navigate("/dashboard");
      }
    });
  };

  return (
    <div>
      <Header showButton={false} />
      <section className="login-page">
        <h1>로그인 페이지입니다!</h1>
        <form action={`${BASE_URL}/user/login`} onSubmit={login} method="post">
          <label htmlFor="email">이메일</label>
          <input
            type="text"
            id="email"
            name="userEmail"
            onChange={handleEmail}
          />
          <label htmlFor="pwd">비밀번호</label>
          <input
            type="password"
            id="pwd"
            name="userPassword"
            onChange={handlePwd}
          />
          <button>로그인</button>
        </form>
        <Link to={"/"}>
          <button>돌아가기</button>
        </Link>
      </section>
    </div>
  );
}

export default Login;
