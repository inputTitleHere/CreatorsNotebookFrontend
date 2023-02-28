import { Link } from "react-router-dom";
import "./Header.scss";

function Header(props) {

  if(props.showButton){
    return (
      <header>
        <h1>
          <span>창작자의 노트북</span>
          <div className="left-options">
            <Link to={"login"}>로그인</Link>
            <span> | </span>
            <Link to={"register"}>회원가입</Link>
          </div>
        </h1>
      </header>
    );
  }else{
    return (
      <header>
        <h1>
          <span>창작자의 노트북</span>
        </h1>
      </header>
    );
  }
}

export default Header;
