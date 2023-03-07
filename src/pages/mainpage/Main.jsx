import { Outlet, redirect } from "react-router-dom";
import { Buffer } from "buffer";
import "./Main.scss";

function Main() {
  return (
    <div className="main-wrapper">
      <Outlet />
    </div>
  );
}

export function mainLoader() {
  const access_token = localStorage.getItem("ACCESS_TOKEN");
  if (access_token) {
    const decoded = JSON.parse(
      Buffer.from(access_token.split(".")[1], "base64").toString("utf-8")
    );
    console.log(decoded);
    if (decoded.iss === "Creators Notebook") {
      // TODO : 만약 JWT시간이 만료되었으면 삭제하도록.(프런트에서 확인 가능한지 검증)
      return redirect("/dashboard");
    }
  }
  return null;
}
export default Main;
