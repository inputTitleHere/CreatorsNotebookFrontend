import { fetchApi } from "../../utils/ApiService";


function Dashboard(){
  return(
    <div className="mypage-wrapper">
      <h1>대충 마이페이지</h1>
    </div>
  )
}

export async function dashboardLoader(){
  const dashboard = await fetchApi("user/test","GET"); // TODO 임시 테스트 API
  return dashboard;
}


export default Dashboard;