const initialState = {};
export default function request(state = initialState, action){
  if(action.type === "GET_MOVIE_REQUEST_SUCCESS"){
    return { ... action.movie }
  } else if(action.type === "GET_MOVIE_REQUEST_ERORR"){
    return {}
  }
  return state
}