const initialState = {};
export default function request(state = initialState, action){
  if(action.type === "GET_10_MOVIES"){
    fetch('http://react-cdp-api.herokuapp.com/movies')
    .then((res)=>{
      return res.json();
    })
    .then((res)=>{
      console.log(res);
      return {... res.data}
    })
  }
  return state
}