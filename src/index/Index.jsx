import { Link } from "react-router-dom";

function Index() {
  return (
    <div className="index-wrapper">
      <div className="login-wrapper">
        <div className="login">
          <Link to={"login"}>
            <div className="link">대충 로그인</div>
          </Link>
        </div>
        <svg width={190} height={190} id="login-pointer">
          <path
            d="M 10 160  Q 30 110, 90 90 T 180 10"
            stroke="black"
            fill="transparent"
          />
        </svg>
      </div>
      <div className="register-wrapper">
        <div className="register">
          <Link to={"register"}>
            <div className="link">일단 회원가입</div>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Index;
