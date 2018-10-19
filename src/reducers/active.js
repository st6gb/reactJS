export default function active(state=["genre"], action){
  if(action.type === "SET_ACTIVE"){
    return [
       action.active
      ]
  }
  return state
}