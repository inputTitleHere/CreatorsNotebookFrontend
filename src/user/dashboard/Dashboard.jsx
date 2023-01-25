import { redirect, useLoaderData } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { dashboardData, userNameState } from "../../recoil/globalRecoil";
import { fetchApi } from "../../utils/ApiService";


function Dashboard(){
  const username = useRecoilValue(userNameState);
  const [dashboard,setDashboardData] = useRecoilState(dashboardData);
  
  // setDashboardData(useLoaderData());
  return(
    <div className="mypage-wrapper">
      <h1>대충 {username}의 대쉬보드</h1>
      <div>
        {dashboard}
      </div>
    </div>
  )
}

/**
 * 대시보드 정보 로딩해서 바로 제시할 것.
 */
export async function dashboardLoader(){
  const dashboard = await fetchApi("user/test","GET"); // TODO 임시 테스트 API
  if(!dashboard){
    return redirect('/login');
  }
  return dashboard?dashboard:null;
}


export default Dashboard;