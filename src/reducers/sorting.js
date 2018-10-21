const initialState = "date";
export default function sorting(state = initialState, action){
  if(action.type === "SORT_FILM"){
    return action.sortBy
  }
  return state
}