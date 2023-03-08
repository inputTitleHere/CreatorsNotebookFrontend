import { Link } from "react-router-dom";
import Header from "../common/Header";

function Index() {
  return (
    <div className="main">
      <Header showButton={true} />
      <div className="index-wrapper">
        <div className="login-wrapper">
          <div className="login">
            <Link to={"/user/login"} draggable={false} >
              <div className="link">대충 로그인</div>
            </Link>
          </div>
        </div>
        <div className="register-wrapper">
          <div className="register">
            <Link to={"/user/register"} draggable={false}>
              <div className="link">일단 회원가입</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Index;
