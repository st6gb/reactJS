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

  render(){
      const { data } = this.props;
          if(data.length === 0){
              return <div className={cx('contentWrapper')}>Ничего не найдено</div>
          } else {
           return( 
           <div className={cx('contentWrapper')}>
                {data.map((film, index) => {
                    return(
                        <Link to={{ pathname: `/movies/${film.id}` }} key={index}>
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
    data: state.request
  })

  export default connect(mapStateToProps)(PosterFilmWrapper);