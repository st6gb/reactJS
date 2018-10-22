export default function active(state="genres", action){
  if(action.type === "SET_ACTIVE"){
    return action.active
  }
  return state
}