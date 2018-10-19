import React, { Component, PureComponent } from 'react';
import classNames from 'classnames/bind';
import PropTypes from "prop-types";
import styles from './PosterFilmWrapper.scss';
import PosterFilm from '../PosterFilm/PosterFilm.jsx';
import { connect } from "react-redux";

const cx = classNames.bind(styles);

class PosterFilmWrapper extends PureComponent{
  constructor(){
      super();
  }
  render(){
      const { data } = this.props.data;
      console.log(data);
          if(data===undefined){
              return <div>Ничего не найдено</div>
          } else {
           return( 
           <div className={cx('contentWrapper')}>
                {data.map((film) => {
                    return <PosterFilm {...film} key ={film.id}/> 
                })}
            </div>
          )}
  }
}
PosterFilmWrapper.propTypes = {
  data: PropTypes.array,
}
const mapStateToProps = state => ({
    data: state.request
})
const mapDispatchToProps = dispatch =>({
    onClick: title =>{
        dispatch({type: "SET_ACTIVE", active: title})
    },
    getData : () =>{
        dispatch({type: "GET_10_MOVIES", data: {}})
    }

})
export default connect(mapStateToProps, mapDispatchToProps)(PosterFilmWrapper);