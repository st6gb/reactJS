export default function getFilm (search, searchBy){
  return (dispatch) => {
    dispatch({
      type: 'GET_FILM_REQUEST'
    })
    fetch(`http://react-cdp-api.herokuapp.com/movies?search=${search}&searchBy=${searchBy}&limit=20`)
    .then((res)=>{
      return res.json();
    })
    .then((res)=>{
      return dispatch({
        type: 'GET_FILM_REQUEST_SUCCESS',
        payload: res.data
      })
    })
    .catch((res)=>{
      return dispatch({
        type: 'GET_FILM_REQUEST_ERORR',
        payload: res.error,
        error: true
      })
    })
  }
}
