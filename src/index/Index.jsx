import { Link } from "react-router-dom";

function Index(){
  return (
    <div className="index-wrapper">
      <h1>인덱스 페이지입니다!</h1>
      <Link to={"login"}>
          <button>로그인</button>
        </Link>
    </div>
  )
}
export default Index;