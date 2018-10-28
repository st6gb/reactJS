import React, { Component, PureComponent } from 'react';
import classNames from 'classnames/bind';
import PropTypes from "prop-types";
import styles from './PosterFilmWrapper.scss';
import PosterFilm from '../PosterFilm/PosterFilm.jsx';
import { connect } from "react-redux";
import { Link } from 'react-router-dom'

const cx = classNames.bind(styles);

class PosterFilmWrapper extends PureComponent{
  constructor(){
      super();
  }

  sortingRender(data){
      if(this.props.sorting === 'date'){
        return data.sort((a,b)=>{
                return a.runtime > b.runtime ? 1 : -1; 
            })
      } else if(this.props.sorting === 'rating'){
        return data.sort((a,b)=>{
            return a.vote_average < b.vote_average ? 1 : -1; 
        }) 
      } else if (this.props.sorting === 'release'){
        return data.sort((a,b)=>{
            return a.release_date.slice(0,4) > b.release_date.slice(0,4) ? 1 : -1; 
        }) 
      }else{
          return data;
      }
  }
  render(){
      const data = this.sortingRender(this.props.data);
          if(data.length === 0){
              return <div className={cx('contentWrapper')}>Ничего не найдено</div>
          } else {
           return( 
           <div className={cx('contentWrapper')}>
                {data.map((film) => {
                    return(
                        <Link to={{ pathname: `/movies/${film.id}` }}>
                        <PosterFilm {...film} key ={film.id}/> 
                        </Link>
                    ) 
                })}
            </div>
          )}
  }
}
PosterFilmWrapper.propTypes = {
  data: PropTypes.array,
}
const mapStateToProps = state => ({
    data: state.request,
    sorting: state.sorting
})
const mapDispatchToProps = dispatch =>({
    onClick: title =>{
        dispatch(setActiveTab(title))
    }

})
export default connect(mapStateToProps, mapDispatchToProps)(PosterFilmWrapper);