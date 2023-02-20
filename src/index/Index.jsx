import { Link } from "react-router-dom";
import "./Index.scss";

function Index() {
  return (
    <div className="index-wrapper">
      <Link to={"login"}>
        <div className="login-wrapper">
          <div className="login"></div>
        </div>
      </Link>
      <Link to={"register"}>
        <div className="register-wrapper">
          <div className="register"></div>
        </div>
      </Link>
    </div>
  );
}
export default Index;
