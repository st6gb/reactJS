export default function getOneMovie(pathname){
  return (dispatch) => {
    dispatch({
      type: 'GET_MOVIE_REQUEST'
    })
    fetch(`http://react-cdp-api.herokuapp.com${pathname}`)
    .then((res)=>{
      return res.json();
    })
    .then((res)=>{
      console.log(res)
      return dispatch({
        type: 'GET_MOVIE_REQUEST_SUCCESS',
        movie: res
      })
    })
    .catch((res)=>{
      return dispatch({
        type: 'GET_MOVIE_REQUEST_ERORR',
        movie: res.error,
        error: true
      })
    })
  }
}
