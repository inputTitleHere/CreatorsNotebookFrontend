import { BASE_URL } from "../config/app-config";

export function fetchApi(url, method, request){
  
  const auth = localStorage.getItem("ACCESS_TOKEN");

  let options={
    headers: auth? new Headers({
      "Content-Type":"application/json",
      "Authorization" : "Bearer "+auth
    }):new Headers({
      "Content-Type":"application/json",
    }),
    url:BASE_URL + url,
    method:method,
    
  };

  if(request){ 
    options.body=JSON.stringify(request);
  }

  return fetch(options.url, options)
    .then((response)=>{
      if(response.status===403){ // fetch  will throw error only on network error(not 403, 404, 500 ect)
        return null;
        // window.location="/login";
      }
      return response.json().then((json)=>{
        console.log("@fetchAPI JSON result ↓ ");
        console.log(json);
        if(!response.ok){
          console.log("Response not ok");
          console.log(response);
        }
        return json;
      })
    })
    .catch((error)=>{
      console.log(error);
    })
}