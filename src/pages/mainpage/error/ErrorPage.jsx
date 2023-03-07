import { useRouteError } from "react-router-dom";

function ErrorPage(){
  const error = useRouteError();
  console.log(error);
  return (
    <div className="error">
      <h1>! ERROR !</h1>
      뭔가 잘못되었습니다. 
      <h3>에러 번호 : [{error.status} - {error.statusText}]</h3>
      <h3>에러 사유 : {error.data}</h3>
    </div> 
  )
}

export default ErrorPage;