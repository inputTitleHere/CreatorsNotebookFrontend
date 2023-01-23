import { Outlet } from "react-router-dom";
import { fetchApi } from "../utils/ApiService";
import "./Main.scss";

function Main() {

  const doStuff = () =>{
    fetchApi("user/test/timed","GET")
  }


  return (
    <div>
      <h1>Creators Notebook</h1>
      <div className="login-section-wrapper">
        <button onClick={doStuff}>call authorized api</button>
        <div className="login-test">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
export default Main;
