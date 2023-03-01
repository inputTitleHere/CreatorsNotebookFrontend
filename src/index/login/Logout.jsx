import { Navigate } from "react-router-dom";

function Logout(){
  return(
    <Navigate to={"/"}></Navigate>
  )
}
export default Logout;

export function logoutLoader(){
  localStorage.removeItem("ACCESS_TOKEN");
  localStorage.removeItem("USER_NAME");
  return null;
}
