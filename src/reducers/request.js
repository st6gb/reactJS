const initialState = [];
export default function request(state = initialState, action){
  if(action.type === "GET_FILM_REQUEST_SUCCESS"){
    console.log([ ...action.payload])
    return [ ... action.payload ]
  } else if(action.type === "GET_FILM_REQUEST_ERORR"){
    return []
  }
  return state
}